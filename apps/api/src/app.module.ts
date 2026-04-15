import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './auth/auth.module';
import { AvailabilityModule } from './availability/availability.module';
import { BookingsModule } from './bookings/bookings.module';
import { FlightsModule } from './flights/flights.module';
import { WebhooksModule } from './webhooks/webhooks.module';
import { ContentModule } from './content/content.module';
import { PipelineModule } from './pipeline/pipeline.module';
import { HealthModule } from './health/health.module';
import { PrismaModule } from './common/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    // Rate limiting — 60 requests per minute per IP
    ThrottlerModule.forRoot([{ ttl: 60000, limit: 60 }]),

    // Database
    PrismaModule,

    // Feature modules
    AuthModule,
    AvailabilityModule,
    BookingsModule,
    FlightsModule,
    WebhooksModule,
    ContentModule,
    PipelineModule,
    HealthModule,
  ],
})
export class AppModule {}
