import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { BookingsService } from './bookings.service';
import { JwtAuthGuard } from '../auth/auth.guard';
import { Request } from 'express';

@ApiTags('Bookings')
@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post('session')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a booking session/cart in Checkfront' })
  async createSession(
    @Body() body: { itemId: string; startDate: string; endDate: string; guests: number },
  ) {
    return this.bookingsService.createSession(body);
  }

  @Post('create')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Finalise and confirm a booking from session' })
  async createBooking(
    @Body()
    body: {
      sessionId: string;
      customerName: string;
      customerEmail: string;
      paymentToken?: string;
    },
  ) {
    return this.bookingsService.createBooking(body);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'List all bookings for the authenticated user' })
  async listBookings(@Req() req: Request) {
    const user = req['user'] as { id: string };
    return this.bookingsService.listBookings(user.id);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get a specific booking by ID' })
  async getBooking(@Param('id') id: string) {
    return this.bookingsService.getBooking(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Amend a booking (dates, guests, notes)' })
  async amendBooking(
    @Param('id') id: string,
    @Body() body: { startDate?: string; endDate?: string; guests?: number; notes?: string },
  ) {
    return this.bookingsService.amendBooking(id, body);
  }
}
