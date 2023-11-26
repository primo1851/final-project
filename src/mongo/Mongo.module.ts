import { Module } from '@nestjs/common';
import { MongoDBService } from './mongo.service';

@Module({
  providers: [MongoDBService],
  exports: [MongoDBService], // Export the service to make it available for injection in other modules
})
export class MongoDBModule {}
