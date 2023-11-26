import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MongoDBService } from './mongo/mongo.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const mongoDBService = app.get(MongoDBService);
  await mongoDBService.connect();

  await app.listen(3000);
  console.log('Application is running on port 3000');
}
bootstrap();
