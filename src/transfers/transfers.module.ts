import { Module } from '@nestjs/common';
import { Transfer, TransferSchema } from './transfer.entity';
import { TransfersController } from './transfers.controller';
import { TransfersService } from './transfers.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Transfer.name, schema: TransferSchema },
    ]),
  ],
  providers: [TransfersService],
  controllers: [TransfersController],
})
export class TransfersModule {}
