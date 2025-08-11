import { Injectable } from '@nestjs/common';

export type Badge = { code: string; name: string; description: string; icon: string; earnedAt?: Date };

@Injectable()
export class BadgesService {
  private badges: Record<string, Badge[]> = {}; // userId -> badges

  earn(userId: string, badge: Badge) {
    this.badges[userId] = this.badges[userId] || [];
    this.badges[userId].push({ ...badge, earnedAt: new Date() });
    return badge;
  }

  list(userId: string) {
    return this.badges[userId] || [];
  }
}
