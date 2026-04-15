import { Controller, Get, Query, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AvailabilityService } from './availability.service';

@ApiTags('Availability')
@Controller('availability')
export class AvailabilityController {
  constructor(private readonly availabilityService: AvailabilityService) {}

  @Get('search')
  @ApiOperation({ summary: 'Search availability by dates, guests, and optional item ID' })
  async search(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
    @Query('guests') guests: string,
    @Query('itemId') itemId?: string,
  ) {
    return this.availabilityService.search({
      startDate,
      endDate,
      guests: parseInt(guests, 10),
      itemId,
    });
  }

  @Get('calendar/:itemId')
  @ApiOperation({ summary: 'Get availability calendar for a specific item over a date range' })
  async calendar(
    @Param('itemId') itemId: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.availabilityService.getCalendar({ itemId, startDate, endDate });
  }

  @Get('nearest/:itemId')
  @ApiOperation({ summary: 'Find nearest available dates when preferred date is sold out' })
  async nearest(
    @Param('itemId') itemId: string,
    @Query('date') date: string,
  ) {
    return this.availabilityService.findNearest(itemId, date);
  }
}
