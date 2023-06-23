import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get('')
  async getAll() {
    console.log('All info is shown');
    return this.service.getUsers();
  }

  @Get(':id')
  async get(@Body() user: User) {
    console.log('User with id number: ' + user.id + 'is available');
    return this.service.getUser(user.id);
  }

  @Get('/addCard')
  async addCard(@Body() user: User) {
    console.log('New card with number: ' + user.cardNumber + 'is available');
    return this.service.addCard(user);
  }
  @Post()
  create(@Body() user: User) {
    console.log('New user was created');
    return this.service.createUser(user);
  }

  @Put()
  update() {
    console.log('User was updated');
    return this.service.updateUser();
  }

  @Delete(':id')
  deleteUser(@Body() user: User) {
    console.log('User was deleted');
    return this.service.deleteUser(user, user.id);
  }
}
