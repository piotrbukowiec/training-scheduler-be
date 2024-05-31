import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { cwd } from 'process';
import { config } from 'dotenv';
config();
const { env } = process;
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: env['DB_TYPE'] as any,
  host: env['DB_HOST'],
  port: Number(env['DB_PORT']),
  username: env['DB_USERNAME'],
  password: env['DB_PASSWORD'],
  database: 'trainings_scheduler',
  entities: [join(cwd(), '/dist/**/*.entity{.js,.ts}')],
  logging: true,
  synchronize: true,
};
