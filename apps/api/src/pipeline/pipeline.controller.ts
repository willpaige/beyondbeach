import {
  Controller,
  Get,
  Patch,
  Post,
  Body,
  Param,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { PipelineService } from './pipeline.service';
import { JwtAuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Request } from 'express';

@ApiTags('Pipeline')
@Controller('pipeline')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('STAFF', 'ADMIN')
@ApiBearerAuth()
export class PipelineController {
  constructor(private readonly pipelineService: PipelineService) {}

  @Get()
  @ApiOperation({ summary: 'Get all bookings grouped by pipeline stage' })
  async getAll() {
    return this.pipelineService.getAllByStage();
  }

  @Patch(':id/stage')
  @ApiOperation({ summary: 'Move a booking to a new pipeline stage' })
  async moveStage(
    @Param('id') id: string,
    @Body() body: { stage: string },
    @Req() req: Request,
  ) {
    const user = req['user'] as { id: string };
    return this.pipelineService.moveToStage(
      id,
      body.stage as Parameters<PipelineService['moveToStage']>[1],
      user.id,
    );
  }

  @Post(':id/notes')
  @ApiOperation({ summary: 'Add a staff note to a booking' })
  async addNote(
    @Param('id') id: string,
    @Body() body: { content: string },
    @Req() req: Request,
  ) {
    const user = req['user'] as { id: string };
    return this.pipelineService.addNote(id, user.id, body.content);
  }
}
