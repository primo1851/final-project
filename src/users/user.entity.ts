import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, SchemaDefinitionProperty } from 'mongoose';
import { CardDto } from 'src/dtos/card.dto';
import { UserDto } from 'src/dtos/user.dto';
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
  card: CardDto;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transfers' }] })
  transfer: Transfer[];
  user: UserDto[];
}
export const UserSchema = SchemaFactory.createForClass(User);
