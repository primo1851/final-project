import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';
import { addUserMenu } from './scripts/addUsers';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await mongoose.connect('mongodb://localhost:27017/onlineBanking');

  await app.listen(3000);
  console.log('Application is running on port 3000');
  addUserMenu(app);
}
bootstrap();
