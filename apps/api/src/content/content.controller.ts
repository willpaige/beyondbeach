import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { ContentService } from './content.service';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('Content')
@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  // --- Holidays ---

  @Get('holidays')
  @ApiOperation({ summary: 'List all holidays (public)' })
  async listHolidays() {
    return this.contentService.listHolidays();
  }

  @Get('holidays/:id')
  @ApiOperation({ summary: 'Get a single holiday by ID (public)' })
  async getHoliday(@Param('id') id: string) {
    return this.contentService.getHoliday(id);
  }

  @Post('holidays')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('STAFF', 'ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new holiday (staff/admin only)' })
  async createHoliday(
    @Body()
    body: {
      title: string;
      slug: string;
      destination: string;
      description: string;
      price?: number;
      published?: boolean;
    },
  ) {
    return this.contentService.createHoliday(body);
  }

  @Patch('holidays/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('STAFF', 'ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a holiday (staff/admin only)' })
  async updateHoliday(
    @Param('id') id: string,
    @Body()
    body: {
      title?: string;
      slug?: string;
      destination?: string;
      description?: string;
      price?: number;
      published?: boolean;
    },
  ) {
    return this.contentService.updateHoliday(id, body);
  }

  @Delete('holidays/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('STAFF', 'ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a holiday (staff/admin only)' })
  async deleteHoliday(@Param('id') id: string) {
    return this.contentService.deleteHoliday(id);
  }

  // --- Destinations ---

  @Get('destinations')
  @ApiOperation({ summary: 'List all destinations (public)' })
  async listDestinations() {
    return this.contentService.listDestinations();
  }

  @Post('destinations')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('STAFF', 'ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a destination (staff/admin only)' })
  async createDestination(
    @Body() body: { name: string; slug: string; description: string; country: string },
  ) {
    return this.contentService.createDestination(body);
  }

  @Patch('destinations/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('STAFF', 'ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a destination (staff/admin only)' })
  async updateDestination(
    @Param('id') id: string,
    @Body() body: { name?: string; slug?: string; description?: string; country?: string },
  ) {
    return this.contentService.updateDestination(id, body);
  }

  @Delete('destinations/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('STAFF', 'ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a destination (staff/admin only)' })
  async deleteDestination(@Param('id') id: string) {
    return this.contentService.deleteDestination(id);
  }

  // --- Deals ---

  @Get('deals')
  @ApiOperation({ summary: 'List all active deals (public)' })
  async listDeals() {
    return this.contentService.listDeals();
  }

  @Post('deals')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('STAFF', 'ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a deal (staff/admin only)' })
  async createDeal(
    @Body()
    body: {
      title: string;
      description: string;
      discountPercent?: number;
      validFrom: string;
      validTo: string;
      holidayId?: string;
    },
  ) {
    return this.contentService.createDeal(body);
  }

  @Patch('deals/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('STAFF', 'ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a deal (staff/admin only)' })
  async updateDeal(
    @Param('id') id: string,
    @Body()
    body: {
      title?: string;
      description?: string;
      discountPercent?: number;
      validFrom?: string;
      validTo?: string;
      holidayId?: string;
    },
  ) {
    return this.contentService.updateDeal(id, body);
  }

  @Delete('deals/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('STAFF', 'ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a deal (staff/admin only)' })
  async deleteDeal(@Param('id') id: string) {
    return this.contentService.deleteDeal(id);
  }

  // --- Blog Posts ---

  @Get('blog')
  @ApiOperation({ summary: 'List all published blog posts (public)' })
  async listBlogPosts() {
    return this.contentService.listBlogPosts();
  }

  @Get('blog/:id')
  @ApiOperation({ summary: 'Get a single blog post (public)' })
  async getBlogPost(@Param('id') id: string) {
    return this.contentService.getBlogPost(id);
  }

  @Post('blog')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('STAFF', 'ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a blog post (staff/admin only)' })
  async createBlogPost(
    @Body()
    body: {
      title: string;
      slug: string;
      content: string;
      published?: boolean;
      authorId: string;
    },
  ) {
    return this.contentService.createBlogPost(body);
  }

  @Patch('blog/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('STAFF', 'ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a blog post (staff/admin only)' })
  async updateBlogPost(
    @Param('id') id: string,
    @Body()
    body: {
      title?: string;
      slug?: string;
      content?: string;
      published?: boolean;
    },
  ) {
    return this.contentService.updateBlogPost(id, body);
  }

  @Delete('blog/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('STAFF', 'ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a blog post (staff/admin only)' })
  async deleteBlogPost(@Param('id') id: string) {
    return this.contentService.deleteBlogPost(id);
  }
}
