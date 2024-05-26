import { ValidationPipe } from '@nestjs/common';

export const validateDtoPipe = new ValidationPipe({
  forbidNonWhitelisted: true,
  whitelist: true,
});
