import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from '../dtos/user.dto';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get()
  async getAll() {
    console.log('All info is shown');
    return this.service.getAllUsers();
  }

  @Get(':id')
  async get(@Body() user: UserDto) {
    console.log('User with id number: ' + user.id + 'is available');
    return this.service.getUser(user.id);
  }

  @Post()
  create(@Body() user: UserDto) {
    console.log('New user was created');
    return this.service.createUser(user);
  }

  @Put()
  updateUsers() {
    console.log('User was updated');
    return this.service.updateUsers();
  }

  @Delete(':id')
  deleteUser(@Body() user: UserDto) {
    console.log('User was deleted');
    return this.service.deleteUser(user.id);
  }
}
