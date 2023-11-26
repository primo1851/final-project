import { Length } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TransfersDto } from './transfers.dto';

@Entity()
export class UserDto {
  @PrimaryGeneratedColumn()
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
  birthday: number;

  @Column({ default: '12345' })
  bankAccount: number;

  @Column({ default: '123' })
  securityCode: number;
}
