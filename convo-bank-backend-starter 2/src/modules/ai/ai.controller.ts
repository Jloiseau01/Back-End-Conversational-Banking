import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
  constructor(private ai: AiService) {}

  @Post('chat')
  async chat(@Body() body: { message: string }) {
    return { reply: await this.ai.chat(body.message) };
  }

  @Get('health')
  health() {
    return { ok: true };
  }
}
