import { Length } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(25)
  fullName?: string;

  @Column()
  birthday?: Date;

  @Column()
  isActive?: boolean;
}
