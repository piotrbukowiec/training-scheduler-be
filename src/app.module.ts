import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrainingsModule } from './trainings/trainings.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validationSchema: Joi.object({
        APP_PORT: Joi.number().default(3000),
        OPENAI_API_KEY: Joi.string().default(null),
      }),
    }),
    ThrottlerModule.forRoot([
      {
        name: 'long',
        ttl: 1000 * 60,
        limit: 2,
      },
      {
        name: 'short',
        ttl: 1000 * 60,
        limit: 10,
      },
    ]),
    TrainingsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
