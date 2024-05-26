import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { validateDtoPipe } from './pipes/validate-dto.pipe';
import helmet from 'helmet';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(validateDtoPipe);
  app.use(cookieParser());
  (app as NestExpressApplication).use(helmet());
  await app.listen(3001);
};
bootstrap();
