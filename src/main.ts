import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { validateDtoPipe } from './pipes/validate-dto.pipe';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors({
    origin: '*',
  });
  app.useGlobalPipes(validateDtoPipe);
  app.use(cookieParser());
  const port = await configService.get<number>('APP_PORT');
  await app.listen(port, () => {
    new Logger().log(`Listening on ${port}`);
  });
};
bootstrap();
