import {
  Controller,
  Post,
  Get,
  Body,
  UseGuards,
  Req,
  Res,
} from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './auth.guard';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import {
  LoginDto,
  ForgotPasswordDto,
  ResetPasswordDto,
  RegisterDto,
} from './dto/login.dto';
import { Request, Response } from 'express';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login with email and password' })
  @Throttle({ default: { ttl: 60000, limit: 5 } })
  async login(
    @Body() dto: LoginDto,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.login(dto, req, res);
  }

  @Post('refresh')
  @ApiOperation({ summary: 'Refresh access token using refresh cookie' })
  @Throttle({ default: { ttl: 60000, limit: 10 } })
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.refresh(req, res);
  }

  // FIX #11: No auth guard — logout must work even with expired access token
  @Post('logout')
  @ApiOperation({ summary: 'Logout and revoke refresh token' })
  async logout(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.logout(req, res);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current authenticated user profile' })
  async me(@Req() req: Request) {
    const user = req['user'] as { sub: string };
    return this.authService.getMe(user.sub);
  }

  @Post('forgot-password')
  @ApiOperation({ summary: 'Request a password reset email' })
  @Throttle({ default: { ttl: 60000, limit: 3 } })
  async forgotPassword(@Body() dto: ForgotPasswordDto) {
    await this.authService.requestPasswordReset(dto.email);
    return { ok: true };
  }

  @Post('reset-password')
  @ApiOperation({ summary: 'Reset password with token' })
  @Throttle({ default: { ttl: 60000, limit: 5 } })
  async resetPassword(@Body() dto: ResetPasswordDto) {
    await this.authService.resetPassword(dto.token, dto.password);
    return { ok: true };
  }

  // FIX #7: Use RegisterDto with proper validation
  @Post('register')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a staff account (admin only)' })
  async register(@Body() dto: RegisterDto) {
    return this.authService.createStaffAccount(
      dto.email,
      dto.name,
      dto.password,
      dto.role,
    );
  }
}
