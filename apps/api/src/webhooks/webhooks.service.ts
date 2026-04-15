import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../common/prisma.service';

interface CheckfrontWebhookPayload {
  event: string;
  bookingId: string;
  data: Record<string, unknown>;
}

interface KyteWebhookPayload {
  event: string;
  flightBookingId: string;
  data: Record<string, unknown>;
}

@Injectable()
export class WebhooksService {
  private readonly logger = new Logger(WebhooksService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  validateCheckfrontSignature(payload: string, signature: string): boolean {
    // TODO: Validate HMAC signature using configService.get('CHECKFRONT_WEBHOOK_SECRET')
    // TODO: Compare computed signature with the one in the request header
    return true;
  }

  validateKyteSignature(payload: string, signature: string): boolean {
    // TODO: Validate Kyte webhook signature using configService.get('KYTE_WEBHOOK_SECRET')
    return true;
  }

  async processCheckfrontWebhook(payload: CheckfrontWebhookPayload): Promise<void> {
    this.logger.log(`Processing Checkfront webhook: ${payload.event} for booking ${payload.bookingId}`);

    switch (payload.event) {
      case 'booking.modified':
        // TODO: Update booking record in DB with new details from Checkfront
        break;
      case 'booking.payment':
        // TODO: Update payment status in DB
        // TODO: Trigger notification to customer if payment confirmed
        break;
      case 'inventory.change':
        // TODO: Update cached availability data
        // TODO: Notify any active sessions affected by inventory change
        break;
      default:
        this.logger.warn(`Unhandled Checkfront webhook event: ${payload.event}`);
    }
  }

  async processKyteWebhook(payload: KyteWebhookPayload): Promise<void> {
    this.logger.log(`Processing Kyte webhook: ${payload.event} for flight ${payload.flightBookingId}`);

    switch (payload.event) {
      case 'flight.status_change':
        // TODO: Update flight booking status in DB
        // TODO: Notify customer of schedule change or cancellation
        break;
      default:
        this.logger.warn(`Unhandled Kyte webhook event: ${payload.event}`);
    }
  }
}
