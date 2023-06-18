import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { AppDataSource } from 'src/Database/dataSource';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get(':id')
  async get(@Param() params) {
    return AppDataSource.manager.findOneBy(User, params.id);
  }

  @Post()
  create(@Body() user: User) {
    return this.service.createUser(user);
  }

  @Put()
  update(@Body() user: User) {
    return this.service.updateUser(user);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.service.deleteUser(params.id);
  }
}
