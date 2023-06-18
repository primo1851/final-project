import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './Database/dataSource';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const isInitialized: boolean = AppDataSource.isInitialized;
  console.log(isInitialized);
}
bootstrap();
