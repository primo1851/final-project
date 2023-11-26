import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Transfer } from './transfer.entity';
import { Model } from 'mongoose';
import { TransfersDto } from 'src/dtos/transfers.dto';

@Injectable()
export class TransfersService {
  constructor(
    @InjectModel(Transfer.name) private transferModel: Model<Transfer>,
  ) {}

  async getAllTransfers(): Promise<Transfer[]> {
    return this.transferModel.find().exec();
  }

  async getTransfers(_id: number): Promise<Transfer> {
    const transfer = await this.transferModel
      .findById(_id)
      .select(
        'firstName middleName lastName bankAccount cardNumber securityCode birthday',
      )
      .exec();
    return transfer;
  }

  async createTransfers(newTransferDto: TransfersDto): Promise<Transfer> {
    const newTransfer = new this.transferModel(newTransferDto);
    const createdTransfer = await newTransfer.save();
    return createdTransfer;
  }

  async updateTransfers(transfers: TransfersDto): Promise<Transfer> {
    const updatedTransfer = new this.transferModel(transfers);
    updatedTransfer.bankAccountSender = 3;
    updatedTransfer.firstNameRecipient = 'Timber';
    updatedTransfer.lastNameSender = 'Sawyer';
    await updatedTransfer.save();
    return updatedTransfer;
  }

  async deleteTransfers(_id: number) {
    const deletionResult = await this.transferModel.findOneAndDelete({
      _id: _id,
    });
    console.log('Deleted');

    return deletionResult; // Return the deleted user
  }
}
