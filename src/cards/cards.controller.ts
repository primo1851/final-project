import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';

import { CardsService } from './cards.service';
import { CardDto } from 'src/dtos/card.dto';

@Controller('cards')
export class CardsController {
  constructor(private service: CardsService) {}

  @Get('/')
  async getAll() {
    console.log('All cards are shown');
    return this.service.getAllCards();
  }

  @Get(':securityCode')
  async get(@Body() cards: CardDto) {
    console.log(
      'cards with securityCode number: ' + cards.securityCode + 'is available',
    );
    return this.service.getCard(cards.securityCode);
  }

  @Post()
  create(@Body() cards: CardDto) {
    console.log('New cards was created');
    return this.service.createCards(cards);
  }

  @Put()
  update() {
    console.log('cards with set securityCode was updated');
    return this.service.updateCards();
  }

  @Delete(':securityCode')
  deletecards(@Body() cards: CardDto) {
    console.log('All cards were deleted');
    return this.service.deleteCards(cards.securityCode);
  }
}
