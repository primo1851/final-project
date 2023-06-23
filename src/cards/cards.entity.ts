import { Length } from 'class-validator';
import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Cards {
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
  expirationDate: string;

  @Column({ default: '123' })
  securityCode: number;

  @Column({ default: '123456789987654321' })
  cardNumber: string;

  @ManyToOne(() => User, (user) => user.cards)
  user: User;
}
