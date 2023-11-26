import { Injectable } from '@nestjs/common';
import { Card } from './cards.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema, model } from 'mongoose';
import { CardDto } from 'src/dtos/card.dto';

@Injectable()
export class CardsService {
  constructor(@InjectModel(Card.name) private cardModel: Model<Card>) {}

  async getAllCards(): Promise<Card[]> {
    return this.cardModel.find().exec();
  }

  async getCard(_securityCode: number): Promise<Card> {
    const card = await this.cardModel
      .findById(_securityCode)
      .select(
        'firstName middleName lastName bankAccount cardNumber securityCode birthday',
      )
      .exec();
    return card;
  }

  async createCards(cards: CardDto): Promise<Card> {
    const createCard = new this.cardModel(cards);
    console.log('Card created');

    return createCard.save();
  }

  async updateCards() {
    const CardSchema = new Schema<Card>({
      cardNumber: {
        type: String,
        default: '0000 0000 0000 1111', // Placeholder for card number
      },
    });
    const CardModel = model<Card>('Card', CardSchema);
    const newCard = new CardModel(); // Creating a new card instance
    const savedCard = await newCard.save(); // Saving the card to the database
    console.log('Updated card');

    return savedCard;
  }

  async deleteCards(_securityCode: number) {
    const deletionResult = await this.cardModel.findOneAndDelete({
      _securityCode: _securityCode,
    });
    console.log('Deleted card');

    return deletionResult;
  }
}
