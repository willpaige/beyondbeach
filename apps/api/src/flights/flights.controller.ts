import { Controller, Get, Post, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { FlightsService } from './flights.service';
import { JwtAuthGuard } from '../auth/auth.guard';

@ApiTags('Flights')
@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get('search')
  @ApiOperation({ summary: 'Search available flights via Kyte/GoKyte' })
  async search(
    @Query('origin') origin: string,
    @Query('destination') destination: string,
    @Query('departureDate') departureDate: string,
    @Query('returnDate') returnDate?: string,
    @Query('passengers') passengers?: string,
  ) {
    return this.flightsService.search({
      origin,
      destination,
      departureDate,
      returnDate,
      passengers: parseInt(passengers || '1', 10),
    });
  }

  @Post('hold')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Place a temporary hold on a flight' })
  async hold(@Body() body: { flightId: string; passengers: number }) {
    return this.flightsService.hold(body.flightId, body.passengers);
  }

  @Post('confirm')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Confirm a held flight booking' })
  async confirm(
    @Body() body: { holdId: string; passengerDetails: Record<string, string>[] },
  ) {
    return this.flightsService.confirm(body.holdId, body.passengerDetails);
  }

  @Get(':bookingId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get flight booking status' })
  async getStatus(@Param('bookingId') bookingId: string) {
    return this.flightsService.getStatus(bookingId);
  }
}
