import { IsEmail, IsString, MinLength, IsOptional, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  @MinLength(8)
  password: string;
}

export class ForgotPasswordDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail()
  email: string;
}

export class ResetPasswordDto {
  @ApiProperty()
  @IsString()
  token: string;

  @ApiProperty({ example: 'newpassword123' })
  @IsString()
  @MinLength(8)
  password: string;
}

export class RegisterDto {
  @ApiProperty({ example: 'staff@beyondbeach.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Jane Smith' })
  @IsString()
  @MinLength(1)
  name: string;

  @ApiProperty({ example: 'securepassword123' })
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({ example: 'STAFF', required: false })
  @IsOptional()
  @IsIn(['STAFF', 'ADMIN'])
  role?: string;
}
