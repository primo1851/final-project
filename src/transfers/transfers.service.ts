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

  async getTransfers(_id: number): Promise<Transfer[]> {
    return await this.transferModel.find({
      select: {
        firstNameSender: true,
        lastNameSender: true,
        bankAccountSender: true,
        securityCodeSender: true,
        cardNumberSender: true,
        firstNameRecipient: true,
        lastNameRecipient: true,
        bankAccountRecipient: true,
        securityCodeRecipient: true,
        cardNumberRecipient: true,
      },
      where: { id: _id },
    });
  }

  async createTransfers(transfers: TransfersDto): Promise<Transfer> {
    const createTransfers = new this.transferModel(transfers);
    return createTransfers.save();
  }

  async updateTransfers(transfers: TransfersDto): Promise<Transfer> {
    const updatedUser = new this.transferModel(transfers);
    updatedUser.bankAccountSender = 3;
    updatedUser.firstNameRecipient = 'Timber';
    updatedUser.lastNameSender = 'Sawyer';
    await updatedUser.save();
    return updatedUser;
  }

  async deleteTransfers(_id: number) {
    const deletionResult = await this.transferModel.findOneAndDelete({
      _id: _id,
    });
    console.log('Deleted');

    return deletionResult; // Return the deleted user
  }
}
