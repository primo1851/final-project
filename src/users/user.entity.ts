import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

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
  birthday: number;

  @Prop()
  bankAccount: number;

  @Prop()
  securityCode: number;

  @Prop()
  cardNumber: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
