import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

type PipelineStage =
  | 'ENQUIRY'
  | 'QUOTED'
  | 'DEPOSIT_PAID'
  | 'FLIGHTS_BOOKED'
  | 'FULLY_PAID'
  | 'DOCUMENTS_SENT'
  | 'COMPLETED'
  | 'CANCELLED';

interface PipelineBooking {
  id: string;
  customerName: string;
  stage: PipelineStage;
  totalPrice: number;
  notes: string[];
  updatedAt: string;
}

interface StaffNote {
  id: string;
  bookingId: string;
  authorId: string;
  content: string;
  createdAt: string;
}

@Injectable()
export class PipelineService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllByStage(): Promise<Record<string, PipelineBooking[]>> {
    // TODO: Query Prisma for all bookings, grouped by pipeline stage
    // TODO: Include customer info, pricing, and latest notes
    // TODO: Sort each stage by last updated timestamp
    return {
      ENQUIRY: [],
      QUOTED: [],
      DEPOSIT_PAID: [],
      FLIGHTS_BOOKED: [],
      FULLY_PAID: [],
      DOCUMENTS_SENT: [],
      COMPLETED: [],
      CANCELLED: [],
    };
  }

  async moveToStage(bookingId: string, stage: PipelineStage, userId: string): Promise<PipelineBooking | null> {
    // TODO: Validate stage transition is allowed (e.g. can't go from ENQUIRY to COMPLETED)
    // TODO: Update booking stage in Prisma
    // TODO: Log the stage change with timestamp and user who moved it
    // TODO: Trigger any automations (e.g. send email when DOCUMENTS_SENT)
    return null;
  }

  async addNote(bookingId: string, authorId: string, content: string): Promise<StaffNote> {
    // TODO: Create a staff note attached to the booking in Prisma
    // TODO: Return the created note
    return {
      id: 'stub-note-id',
      bookingId,
      authorId,
      content,
      createdAt: new Date().toISOString(),
    };
  }
}
