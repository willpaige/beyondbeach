import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();

    // Extract token from Authorization header or bb_access cookie
    let token: string | undefined;

    const authHeader = request.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
    }

    if (!token && request.cookies?.bb_access) {
      token = request.cookies.bb_access;
    }

    if (!token) {
      throw new UnauthorizedException('Missing authentication token');
    }

    try {
      const secret = this.configService.get<string>('JWT_SECRET');
      if (!secret) {
        throw new Error('JWT_SECRET is not configured');
      }
      const payload = jwt.verify(token, secret, { algorithms: ['HS256'] });
      request['user'] = payload;
      return true;
    } catch (err) {
      if (err instanceof Error && err.message === 'JWT_SECRET is not configured') {
        throw err; // Let this crash — it's a config error, not an auth error
      }
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
