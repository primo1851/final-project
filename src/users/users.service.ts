import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Cards } from 'src/cards/cards.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find({
      select: [
        'id',
        'firstName',
        'middleName',
        'lastName',
        'bankAccount',
        'cardNumber',
        'securityCode',
        'birthday',
      ],
    });
  }

  async getUser(_id: number): Promise<User[]> {
    return await this.usersRepository.find({
      select: {
        firstName: true,
        middleName: true,
        lastName: true,
        bankAccount: true,
        cardNumber: true,
        securityCode: true,
        birthday: true,
      },
      where: { id: _id },
    });
  }

  async addCard(user: User): Promise<User[]> {
    const newCard1 = new Cards();
    newCard1.cardNumber = '9876543210';
    this.usersRepository.save(newCard1);

    const newCard2 = new Cards();
    newCard2.cardNumber = '9878941220';
    this.usersRepository.save(newCard1);

    user.cards = [newCard1, newCard2];
    return this.usersRepository.save(user.cards);
  }

  createUser(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }
  async updateUser() {
    this.usersRepository.save({
      id: 3,
      firstName: 'Timber',
      lastName: 'Saw',
    });
  }

  async deleteUser(user: User, _id: number) {
    await this.usersRepository.find({
      select: {
        firstName: true,
        middleName: true,
        lastName: true,
        bankAccount: true,
        cardNumber: true,
        securityCode: true,
        birthday: true,
      },
      where: { id: _id },
    });
    this.usersRepository.delete(user);
  }
}
