import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 8000;
  await app.listen(process.env.PORT ?? 8000);
  Logger.log(`Server is running on port ${port}`);
}
bootstrap();
