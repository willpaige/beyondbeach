import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

interface AvailabilitySearchParams {
  startDate: string;
  endDate: string;
  guests: number;
  itemId?: string;
}

interface CalendarParams {
  itemId: string;
  startDate: string;
  endDate: string;
}

interface AvailabilityResult {
  itemId: string;
  date: string;
  available: boolean;
  price?: number;
  spotsRemaining?: number;
}

interface CalendarDay {
  date: string;
  available: boolean;
  price?: number;
}

@Injectable()
export class AvailabilityService {
  constructor(private readonly configService: ConfigService) {}

  async search(params: AvailabilitySearchParams): Promise<AvailabilityResult[]> {
    // TODO: Call Checkfront API /api/3.0/item endpoint
    // TODO: Pass date range, guests, and optional itemId as filters
    // TODO: Parse response and return normalised availability results
    // TODO: Use configService.get('CHECKFRONT_API_KEY') for auth
    return [];
  }

  async getCalendar(params: CalendarParams): Promise<CalendarDay[]> {
    // TODO: Call Checkfront API to get day-by-day availability for a specific item
    // TODO: Return array of dates with availability status and pricing
    return [];
  }

  async findNearest(itemId: string, preferredDate: string): Promise<AvailabilityResult[]> {
    // TODO: When an item is sold out on the preferred date, search nearby dates
    // TODO: Check +/- 7 days from preferred date for alternatives
    // TODO: Return sorted by proximity to preferred date
    return [];
  }
}
