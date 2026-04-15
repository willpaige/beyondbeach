import {
  Injectable,
  UnauthorizedException,
  ForbiddenException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../common/prisma.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { createHash, randomBytes, randomUUID } from 'crypto';
import { Request, Response } from 'express';

const SAFE_USER_SELECT = {
  id: true,
  email: true,
  name: true,
  role: true,
  phone: true,
} as const;

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  // ── Helpers ──────────────────────────────────────────────────────

  private hashToken(token: string): string {
    return createHash('sha256').update(token).digest('hex');
  }

  private get cookieConfig() {
    const isProduction = this.configService.get('NODE_ENV') === 'production';
    const cookieDomain = this.configService.get('COOKIE_DOMAIN') || undefined;
    return { isProduction, cookieDomain };
  }

  private setCookies(
    res: Response,
    accessToken: string,
    refreshToken: string,
  ): void {
    const { isProduction, cookieDomain } = this.cookieConfig;

    res.cookie('bb_access', accessToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: 'lax',
      path: '/',
      maxAge: 900 * 1000, // 15 minutes
      domain: cookieDomain,
    });

    res.cookie('bb_refresh', refreshToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: 'lax',
      path: '/api/v1/auth',
      maxAge: 604800 * 1000, // 7 days
      domain: cookieDomain,
    });
  }

  private clearCookies(res: Response): void {
    const { isProduction, cookieDomain } = this.cookieConfig;
    const shared = { httpOnly: true, secure: isProduction, sameSite: 'lax' as const };

    res.clearCookie('bb_access', { ...shared, path: '/', domain: cookieDomain });
    res.clearCookie('bb_refresh', { ...shared, path: '/api/v1/auth', domain: cookieDomain });
  }

  // ── Core Auth ────────────────────────────────────────────────────

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user || !user.passwordHash) return null;

    // Check account lock — but reset counter if lock has expired (FIX #5)
    if (user.lockedUntil) {
      if (user.lockedUntil > new Date()) {
        throw new ForbiddenException('Account temporarily locked. Try again in 15 minutes.');
      }
      // Lock expired — reset counter so user gets fresh 5 attempts
      await this.prisma.user.update({
        where: { id: user.id },
        data: { failedLoginAttempts: 0, lockedUntil: null },
      });
    }

    const passwordValid = await bcrypt.compare(password, user.passwordHash);

    if (!passwordValid) {
      const failedAttempts = (user.lockedUntil ? 0 : user.failedLoginAttempts) + 1;
      await this.prisma.user.update({
        where: { id: user.id },
        data: {
          failedLoginAttempts: failedAttempts,
          ...(failedAttempts >= 5
            ? { lockedUntil: new Date(Date.now() + 15 * 60 * 1000) }
            : {}),
        },
      });
      return null;
    }

    // Success — reset failed attempts
    if (user.failedLoginAttempts > 0 || user.lockedUntil) {
      await this.prisma.user.update({
        where: { id: user.id },
        data: { failedLoginAttempts: 0, lockedUntil: null },
      });
    }

    return user;
  }

  async login(dto: LoginDto, req: Request, res: Response) {
    const user = await this.validateUser(dto.email, dto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = this.jwtService.sign({
      sub: user.id,
      email: user.email,
      role: user.role,
    });

    const rawRefreshToken = randomBytes(32).toString('hex');
    const tokenHash = this.hashToken(rawRefreshToken);
    const family = randomUUID();

    await this.prisma.refreshToken.create({
      data: {
        tokenHash,
        userId: user.id,
        family,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        userAgent: req.headers['user-agent'] || null,
        ip: req.ip || null,
      },
    });

    this.setCookies(res, accessToken, rawRefreshToken);

    return {
      user: { id: user.id, email: user.email, name: user.name, role: user.role },
    };
  }

  async refresh(req: Request, res: Response) {
    const rawToken = req.cookies?.bb_refresh;
    if (!rawToken) {
      throw new UnauthorizedException('No refresh token');
    }

    const tokenHash = this.hashToken(rawToken);

    // FIX #4: Atomic rotate — use transaction to prevent concurrent tab race
    try {
      return await this.prisma.$transaction(async (tx) => {
        const storedToken = await tx.refreshToken.findUnique({
          where: { tokenHash },
          include: { user: true },
        });

        if (!storedToken) {
          throw new UnauthorizedException('Invalid refresh token');
        }

        // Reuse detection: already revoked = theft
        if (storedToken.revokedAt) {
          await tx.refreshToken.updateMany({
            where: { family: storedToken.family },
            data: { revokedAt: new Date() },
          });
          this.clearCookies(res);
          throw new UnauthorizedException('Token reuse detected');
        }

        if (storedToken.expiresAt < new Date()) {
          throw new UnauthorizedException('Refresh token expired');
        }

        // Revoke current
        await tx.refreshToken.update({
          where: { id: storedToken.id },
          data: { revokedAt: new Date() },
        });

        const user = storedToken.user;

        const accessToken = this.jwtService.sign({
          sub: user.id,
          email: user.email,
          role: user.role,
        });

        const newRawRefreshToken = randomBytes(32).toString('hex');
        const newTokenHash = this.hashToken(newRawRefreshToken);

        await tx.refreshToken.create({
          data: {
            tokenHash: newTokenHash,
            userId: user.id,
            family: storedToken.family,
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            userAgent: req.headers['user-agent'] || null,
            ip: req.ip || null,
          },
        });

        this.setCookies(res, accessToken, newRawRefreshToken);

        return {
          user: { id: user.id, email: user.email, name: user.name, role: user.role },
        };
      });
    } catch (err) {
      if (err instanceof UnauthorizedException) throw err;
      throw new UnauthorizedException('Refresh failed');
    }
  }

  // FIX #11: No auth guard — logout always works even with expired access token
  async logout(req: Request, res: Response) {
    const rawToken = req.cookies?.bb_refresh;
    if (rawToken) {
      const tokenHash = this.hashToken(rawToken);
      await this.prisma.refreshToken.updateMany({
        where: { tokenHash, revokedAt: null },
        data: { revokedAt: new Date() },
      });
    }

    this.clearCookies(res);
    return { ok: true };
  }

  // ── Password ─────────────────────────────────────────────────────

  async hashPassword(password: string): Promise<string> {
    const rounds = parseInt(this.configService.get('BCRYPT_ROUNDS') || '12', 10);
    return bcrypt.hash(password, rounds);
  }

  async requestPasswordReset(email: string): Promise<void> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) return; // no email enumeration

    // FIX #15: Revoke existing unused reset tokens for this user
    await this.prisma.passwordReset.updateMany({
      where: { userId: user.id, usedAt: null },
      data: { usedAt: new Date() },
    });

    const rawToken = randomBytes(32).toString('hex');
    const tokenHash = this.hashToken(rawToken);

    await this.prisma.passwordReset.create({
      data: {
        tokenHash,
        userId: user.id,
        expiresAt: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
      },
    });

    // TODO: send email with reset link containing rawToken
  }

  // FIX #3: Atomic password reset to prevent TOCTOU race
  async resetPassword(token: string, newPassword: string): Promise<void> {
    const tokenHash = this.hashToken(token);
    const passwordHash = await this.hashPassword(newPassword);

    // Atomic: mark as used and get the record in one shot
    const updated = await this.prisma.passwordReset.updateMany({
      where: {
        tokenHash,
        usedAt: null,
        expiresAt: { gt: new Date() },
      },
      data: { usedAt: new Date() },
    });

    if (updated.count === 0) {
      throw new BadRequestException('Invalid or expired reset token');
    }

    // Get the record to find the userId
    const resetRecord = await this.prisma.passwordReset.findFirst({
      where: { tokenHash },
    });

    if (!resetRecord) {
      throw new BadRequestException('Reset token not found');
    }

    await this.prisma.user.update({
      where: { id: resetRecord.userId },
      data: { passwordHash, failedLoginAttempts: 0, lockedUntil: null },
    });

    // Revoke all refresh tokens
    await this.prisma.refreshToken.updateMany({
      where: { userId: resetRecord.userId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }

  // ── Guest Accounts ───────────────────────────────────────────────

  // FIX #8 + #9: Safe select, role check on existing user
  async createGuestAccount(email: string, name: string) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
      select: { ...SAFE_USER_SELECT, role: true },
    });

    if (existingUser) {
      if (existingUser.role !== 'GUEST') {
        // Don't return staff/admin accounts via guest creation
        throw new ConflictException('Email is associated with a staff account');
      }
      return { user: existingUser };
    }

    const temporaryPassword = randomBytes(8).toString('hex');
    const passwordHash = await this.hashPassword(temporaryPassword);

    const user = await this.prisma.user.create({
      data: { email, name, passwordHash, role: 'GUEST' },
      select: SAFE_USER_SELECT,
    });

    return { user, temporaryPassword };
  }

  // FIX #12: Handle duplicate email with ConflictException
  async createStaffAccount(
    email: string,
    name: string,
    password: string,
    role?: string,
  ) {
    const existing = await this.prisma.user.findUnique({ where: { email } });
    if (existing) {
      throw new ConflictException('Email already registered');
    }

    const passwordHash = await this.hashPassword(password);
    const user = await this.prisma.user.create({
      data: {
        email,
        name,
        passwordHash,
        role: role === 'ADMIN' ? 'ADMIN' : 'STAFF',
      },
      select: SAFE_USER_SELECT,
    });

    return { user };
  }

  // ── Profile ──────────────────────────────────────────────────────

  // FIX #3 (getMe): Return wrapped in { user } to match frontend expectation
  async getMe(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: SAFE_USER_SELECT,
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return { user };
  }
}
