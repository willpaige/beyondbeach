import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../common/prisma.service';

interface CreateSessionDto {
  itemId: string;
  startDate: string;
  endDate: string;
  guests: number;
}

interface CreateBookingDto {
  sessionId: string;
  customerName: string;
  customerEmail: string;
  paymentToken?: string;
}

interface AmendBookingDto {
  startDate?: string;
  endDate?: string;
  guests?: number;
  notes?: string;
}

interface BookingSession {
  sessionId: string;
  itemId: string;
  expiresAt: string;
}

interface Booking {
  id: string;
  checkfrontBookingId: string;
  customerName: string;
  customerEmail: string;
  status: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
}

@Injectable()
export class BookingsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async createSession(dto: CreateSessionDto): Promise<BookingSession> {
    // TODO: Call Checkfront API to create a booking session/cart
    // TODO: Store session reference in our DB for tracking
    // TODO: Return session ID with expiry time
    return {
      sessionId: 'stub-session-id',
      itemId: dto.itemId,
      expiresAt: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
    };
  }

  async createBooking(dto: CreateBookingDto): Promise<Booking> {
    // TODO: Finalise the Checkfront booking session
    // TODO: Process payment via Checkfront or Stripe
    // TODO: Save booking record to our Prisma DB
    // TODO: Return the confirmed booking details
    return {
      id: 'stub-booking-id',
      checkfrontBookingId: 'CF-00000',
      customerName: dto.customerName,
      customerEmail: dto.customerEmail,
      status: 'CONFIRMED',
      startDate: '',
      endDate: '',
      totalPrice: 0,
    };
  }

  async listBookings(userId: string): Promise<Booking[]> {
    // TODO: Query Prisma DB for bookings belonging to user
    // TODO: Support pagination and filtering by status
    return [];
  }

  async getBooking(id: string): Promise<Booking | null> {
    // TODO: Fetch booking from Prisma DB by ID
    // TODO: Optionally sync latest status from Checkfront
    return null;
  }

  async amendBooking(id: string, dto: AmendBookingDto): Promise<Booking | null> {
    // TODO: Call Checkfront API to amend booking dates/guests
    // TODO: Update local DB record to match
    // TODO: Handle amendment fees if applicable
    return null;
  }
}
