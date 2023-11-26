import { Length } from 'class-validator';
import { Card } from '../cards/cards.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import { UserDto } from './user.dto';
import { CardDto } from './card.dto';

@Entity()
export class TransfersDto {
  @PrimaryGeneratedColumn('uuid')
  reqCounter: number;

  @Column({ default: '1' })
  id: number;

  @Column({ default: 'Jane' })
  @Length(25)
  firstNameSender: string;

  @Column({ default: 'Doe' })
  @Length(25)
  lastNameSender: string;

  @Column({ default: '12345' })
  bankAccountSender: number;

  @Column({ default: '123' })
  securityCodeSender: number;

  @Column({ default: '12348998765432491' })
  cardNumberSender: string;

  @Column({ default: 'John' })
  @Length(25)
  firstNameRecipient: string;

  @Column({ default: 'Deree' })
  @Length(25)
  lastNameRecipient: string;

  @Column({ default: '54321' })
  bankAccountRecipient: number;

  @Column({ default: '312' })
  securityCodeRecipient: number;

  @Column({ default: '1234567899876589' })
  cardNumberRecipient: string;

  @OneToOne(() => Card)
  @JoinColumn()
  card: CardDto;

  @ManyToOne(() => Card)
  @JoinColumn()
  user: UserDto;
}
