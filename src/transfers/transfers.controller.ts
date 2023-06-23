import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { Transfers } from './transfer.entity';

@Controller('transfers')
export class TransfersController {
  constructor(private service: TransfersService) {}

  @Get('/')
  async getAll() {
    console.log('All transferss are shown');
    return this.service.getTransferss();
  }

  @Get(':id')
  async get(@Body() transfers: Transfers) {
    console.log('Transfers with id number: ' + transfers.id + 'is available');
    return this.service.getTransfers(transfers.id);
  }

  @Post()
  create(@Body() transfers: Transfers) {
    console.log('New transfers was created');
    return this.service.createTransfers(transfers);
  }

  @Put()
  update() {
    console.log('Transfers was updated');
    return this.service.updateTransfers();
  }

  @Delete(':id')
  deleteTransfers(@Body() transfers: Transfers) {
    console.log('Transfers was deleted');
    return this.service.deleteTransfers(transfers, transfers.id);
  }
}
