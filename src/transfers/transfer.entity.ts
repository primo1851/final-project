import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Transfer {
  @Prop()
  reqCounter: number;

  @Prop()
  id: number;

  @Prop()
  firstNameSender: string;

  @Prop()
  lastNameSender: string;

  @Prop()
  bankAccountSender: number;

  @Prop()
  securityCodeSender: number;

  @Prop()
  cardNumberSender: string;

  @Prop()
  firstNameRecipient: string;

  @Prop()
  lastNameRecipient: string;

  @Prop()
  bankAccountRecipient: number;

  @Prop()
  securityCodeRecipient: number;

  @Prop()
  cardNumberRecipient: string;

  // @OneToOne(() => Cards)
  // @JoinProp()
  // card: Cards;
}
export const TransferSchema = SchemaFactory.createForClass(Transfer);
