import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { validationPipe } from './validation-pipe';
import helmet from 'helmet';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(validationPipe);
  app.use(cookieParser());
  (app as NestExpressApplication).use(helmet());
  await app.listen(3000);
};
bootstrap();
