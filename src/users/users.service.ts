import { Injectable } from '@nestjs/common';
import { Cards } from 'src/cards/cards.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.entity';
import { UserDto } from 'src/dtos/user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(createUserDto: UserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }
  async getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUser(_id: number): Promise<User[]> {
    return await this.userModel.find({
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

  async addCard(createUserDto: UserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);

    const newCard1 = new Cards();
    newCard1.cardNumber = '9876543210';
    await newCard1.save(); // Save the card to the database

    const newCard2 = new Cards();
    newCard2.cardNumber = '9878941220';
    await newCard2.save(); // Save the second card to the database

    createdUser.cards = [newCard1, newCard2]; // Assign cards to the user
    await createdUser.save(); // Save the user with the associated cards

    return createdUser;
  }

  async updateUsers(createUserDto: Partial<UserDto>): Promise<User> {
    const updatedUser = new this.userModel(createUserDto);
    updatedUser.id = 3;
    updatedUser.firstName = 'Timber';
    updatedUser.lastName = 'Sawyer';
    await updatedUser.save();
    return updatedUser;
  }

  async deleteUser(_id: number) {
    const deletionResult = await this.userModel.findOneAndDelete({
      _id: _id,
    });
    console.log('Deleted');

    return deletionResult; // Return the deleted user
  }
}
