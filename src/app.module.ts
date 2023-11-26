import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CardsModule } from './cards/cards.module';
import { TransfersModule } from './transfers/transfers.module';
import { MongoDBModule } from './mongo/Mongo.module';
import { UsersController } from './users/users.controller';
import { TransfersController } from './transfers/transfers.controller';
import { CardsController } from './cards/cards.controller';

@Module({
  imports: [UsersModule, CardsModule, TransfersModule, MongoDBModule],
  controllers: [UsersController, TransfersController, CardsController],
})
export class AppModule {}
