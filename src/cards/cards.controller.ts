import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { AppDataSource } from 'src/Database/dataSource';
import { CardsService } from './cards.service';
import { Cards } from './cards.entity';

@Controller('cards')
export class CardsController {
  constructor(private service: CardsService) {}

  @Get('/')
  async getAll() {
    console.log('All cards are shown');
    return this.service.getAllCards();
  }

  @Get(':securityCode')
  async get(@Body() cards: Cards) {
    console.log(
      'cards with securityCode number: ' + cards.securityCode + 'is available',
    );
    return this.service.getCards(cards.securityCode);
  }

  @Post()
  create(@Body() cards: Cards) {
    console.log('New cards was created');
    return this.service.createCards(cards);
  }

  @Put()
  update() {
    console.log('cards with set securityCode was updated');
    return this.service.updateCards();
  }

  @Delete(':securityCode')
  deletecards(@Body() cards: Cards) {
    console.log('All cards were deleted');
    return this.service.deleteCards(cards, cards.securityCode);
  }
}
