import { Length } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'Jane Doe' })
  @Length(25)
  fullName?: string;

  @Column({ default: '2005-05-01' })
  birthday?: Date;

  @Column()
  isActive?: boolean;

  // add conection!!
  // @OneToMany(() => User, (user) => user)
  // users: User[];
}
