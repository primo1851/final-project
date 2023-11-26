import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { TransfersDto } from '../dtos/transfers.dto';

@Controller('transfers')
export class TransfersController {
  constructor(private service: TransfersService) {}

  @Get('/')
  async getAll() {
    console.log('All transferss are shown');
    return this.service.getAllTransfers();
  }

  @Get(':id')
  async get(@Body() transfers: TransfersDto) {
    console.log('Transfers with id number: ' + transfers.id + 'is available');
    return this.service.getAllTransfers();
  }

  @Post()
  create(@Body() transfers: TransfersDto) {
    console.log('New transfers was created');
    return this.service.createTransfers(transfers);
  }

  @Delete(':id')
  deleteTransfers(@Body() transfers: TransfersDto) {
    console.log('Transfers was deleted');
    return this.service.deleteTransfers(transfers.id);
  }
}
