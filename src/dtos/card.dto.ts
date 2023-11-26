import { Length } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class CardDto {
  @PrimaryGeneratedColumn('uuid')
  reqCounter: number;

  @Column({ default: 'Jane' })
  @Length(25)
  firstNameCard: string;

  @Column({ default: 'Marie' })
  @Length(25)
  middleNameCard?: string;

  @Column({ default: 'Doe' })
  @Length(25)
  lastNameCard: string;

  @Column({ default: '01/05' })
  expirationDate: Date;

  @Column({ default: '123' })
  securityCode: number;

  @Column({ default: '123456789987654321' })
  cardNumber: string;

  // @ManyToOne(() => User, (user) => user.cards)
  // user: User;
}
