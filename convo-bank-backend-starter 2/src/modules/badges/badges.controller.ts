import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { BadgesService, Badge } from './badges.service';

@Controller('badges')
export class BadgesController {
  constructor(private badges: BadgesService) {}

  @Get(':userId')
  list(@Param('userId') userId: string) {
    return this.badges.list(userId);
  }

  @Post(':userId/earn')
  earn(@Param('userId') userId: string, @Body() badge: Badge) {
    return this.badges.earn(userId, badge);
  }
}
