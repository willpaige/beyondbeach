import {
  Controller,
  Post,
  Body,
  Headers,
  HttpCode,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { WebhooksService } from './webhooks.service';

@ApiTags('Webhooks')
@Controller('webhooks')
export class WebhooksController {
  constructor(private readonly webhooksService: WebhooksService) {}

  @Post('checkfront')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Receive Checkfront webhook (booking modified, payment, inventory)' })
  async checkfront(
    @Body() body: { event: string; bookingId: string; data: Record<string, unknown> },
    @Headers('x-checkfront-signature') signature?: string,
  ) {
    if (!this.webhooksService.validateCheckfrontSignature(JSON.stringify(body), signature || '')) {
      throw new BadRequestException('Invalid webhook signature');
    }

    await this.webhooksService.processCheckfrontWebhook(body);
    return { received: true };
  }

  @Post('kyte')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Receive Kyte/GoKyte webhook (flight status change)' })
  async kyte(
    @Body() body: { event: string; flightBookingId: string; data: Record<string, unknown> },
    @Headers('x-kyte-signature') signature?: string,
  ) {
    if (!this.webhooksService.validateKyteSignature(JSON.stringify(body), signature || '')) {
      throw new BadRequestException('Invalid webhook signature');
    }

    await this.webhooksService.processKyteWebhook(body);
    return { received: true };
  }
}
