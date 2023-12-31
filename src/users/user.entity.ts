import { Length } from 'class-validator';
import { Cards } from 'src/cards/cards.entity';
import { Transfers } from 'src/transfers/transfer.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  reqCounter: number;

  @Column({ default: '1' })
  id: number;

  @Column({ default: 'Jane' })
  @Length(25)
  firstName: string;

  @Column({ default: 'Marie' })
  @Length(25)
  middleName?: string;

  @Column({ default: 'Doe' })
  @Length(25)
  lastName: string;

  @Column({ default: '2005-05-01' })
  birthday: Date;

  @Column({ default: '12345' })
  bankAccount: number;

  @Column({ default: '123' })
  securityCode: number;

  @Column({ default: '123456789987654321' })
  cardNumber: string;

  @OneToMany(() => Cards, (card) => card.user)
  cards: Cards[];

  @ManyToMany(() => Transfers)
  @JoinTable()
  transfers: Transfers[];
}
