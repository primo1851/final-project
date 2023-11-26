import { UserDto } from './../dtos/user.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema, model } from 'mongoose';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(newUserDto: UserDto): Promise<User> {
    const newUser = new this.userModel(newUserDto);
    const createdUser = await newUser.save();
    return createdUser;
  }
  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUser(_id: number): Promise<User> {
    const user = await this.userModel
      .findById(_id)
      .select(
        'firstName middleName lastName bankAccount cardNumber securityCode birthday',
      )
      .exec();
    return user;
  }

  async updateUsers(): Promise<User> {
    const userSchema = new Schema<User>({
      lastName: {
        type: String,
        default: 'Smith',
      },
    });
    const userModel = model<User>('User', userSchema);
    const newuser = new userModel();
    const saveduser = await newuser.save();
    console.log('User updated successfully');

    return saveduser;
  }

  async deleteUser(_id: number) {
    const deletionResult = await this.userModel.findOneAndDelete({
      _id: _id,
    });
    console.log('User deleted successfully');

    return deletionResult;
  }
}
