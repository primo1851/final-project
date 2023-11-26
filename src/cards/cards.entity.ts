import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Card {
  @Prop()
  reqCounter: number;

  @Prop()
  firstNameCard: string;

  @Prop()
  middleNameCard?: string;

  @Prop()
  lastNameCard: string;

  @Prop()
  expirationDate: string;

  @Prop()
  securityCode: number;

  @Prop()
  cardNumber: string;

  // @ManyToOne(() => User, (user) => user.cards)
  // user: User;
}
export const CardSchema = SchemaFactory.createForClass(Card);
