import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cards } from './cards.entity';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Cards) private cardsRepository: Repository<Cards>,
  ) {}

  async getAllCards(): Promise<Cards[]> {
    return await this.cardsRepository.find({
      select: [
        'firstNameCard',
        'middleNameCard',
        'lastNameCard',
        'cardNumber',
        'securityCode',
        'expirationDate',
      ],
    });
  }

  async getCards(_securityCode: number): Promise<Cards[]> {
    return await this.cardsRepository.find({
      select: {
        firstNameCard: true,
        middleNameCard: true,
        lastNameCard: true,
        cardNumber: true,
        securityCode: true,
        expirationDate: true,
      },
      where: { securityCode: _securityCode },
    });
  }

  createCards(cards: Cards): Promise<Cards> {
    return this.cardsRepository.save(cards);
  }

  async updateCards() {
    this.cardsRepository.save({
      securityCode: 123,
      firstName: 'Timber',
      lastName: 'Saw',
    });
  }

  async deleteCards(cards: Cards, _securityCode: number) {
    await this.cardsRepository.find({
      select: {
        firstNameCard: true,
        middleNameCard: true,
        lastNameCard: true,
        cardNumber: true,
        securityCode: true,
        expirationDate: true,
      },
      where: { securityCode: _securityCode },
    });
    this.cardsRepository.delete(cards);
  }
}
