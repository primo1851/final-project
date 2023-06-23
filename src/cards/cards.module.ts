import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cards } from './cards.entity';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cards])],
  providers: [CardsService],
  controllers: [CardsController],
})
export class CardsModule {}
