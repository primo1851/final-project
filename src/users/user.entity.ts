import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Cards } from 'src/cards/cards.entity';
import { Transfer } from 'src/transfers/transfer.entity';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  reqCounter: number;

  @Prop()
  id: number;

  @Prop()
  firstName: string;

  @Prop()
  middleName?: string;

  @Prop()
  lastName: string;

  @Prop()
  birthday: Date;

  @Prop()
  bankAccount: number;

  @Prop()
  securityCode: number;

  @Prop()
  cardNumber: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Cards' })
  card: Cards;

  // @OneToMany(() => Cards, (card) => card.user)
  // cards: Cards[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transfers' }] })
  transfer: Transfer[];
  user: Cards[];
  // @ManyToMany(() => Transfers)
  // @JoinTable()
  // transfers: Transfers[];
}
export const UserSchema = SchemaFactory.createForClass(User);
