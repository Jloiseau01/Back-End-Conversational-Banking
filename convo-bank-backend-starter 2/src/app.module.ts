import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { AiModule } from './modules/ai/ai.module';
import { AccountsModule } from './modules/accounts/accounts.module';
import { GoalsModule } from './modules/goals/goals.module';
import { BadgesModule } from './modules/badges/badges.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: process.env.NODE_ENV !== 'production' ? { target: 'pino-pretty' } : undefined
      }
    }),
    AiModule,
    AccountsModule,
    GoalsModule,
    BadgesModule
  ]
})
export class AppModule {}
