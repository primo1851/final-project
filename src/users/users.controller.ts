import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from 'src/dtos/user.dto';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get('')
  async getAll() {
    console.log('All info is shown');
    return this.service.getUsers();
  }

  @Get(':id')
  async get(@Body() user: UserDto) {
    console.log('User with id number: ' + user.id + 'is available');
    return this.service.getUser(user.id);
  }

  @Post('/addCard')
  async addCard(@Body() user: UserDto) {
    console.log('New card with number: ' + user.cardNumber + 'is available');
    return this.service.addCard(user);
  }
  @Post()
  create(@Body() user: UserDto) {
    console.log('New user was created');
    return this.service.createUser(user);
  }

  @Put()
  updateUsers(@Body() user: UserDto) {
    console.log('User was updated');
    return this.service.updateUsers(user);
  }

  @Delete(':id')
  deleteUser(@Body() user: UserDto) {
    console.log('User was deleted');
    return this.service.deleteUser(user, user.id);
  }
}
