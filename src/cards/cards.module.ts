import { Module } from '@nestjs/common';
import { CardSchema } from './cards.entity';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/onlineBanking'),
    MongooseModule.forFeature([{ name: 'Card', schema: CardSchema }]),
  ],
  controllers: [CardsController],
  providers: [CardsService],
  exports: [CardsService],
})
export class CardsModule {}
