import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transfers } from './transfer.entity';

@Injectable()
export class TransfersService {
  constructor(
    @InjectRepository(Transfers)
    private transfersRepository: Repository<Transfers>,
  ) {}

  async getTransferss(): Promise<Transfers[]> {
    return await this.transfersRepository.find({
      select: [
        'id',
        'firstNameSender',
        'lastNameSender',
        'bankAccountSender',
        'securityCodeSender',
        'cardNumberSender',
        'firstNameRecipient',
        'lastNameRecipient',
        'bankAccountRecipient',
        'securityCodeRecipient',
        'cardNumberRecipient',
      ],
    });
  }

  async getTransfers(_id: number): Promise<Transfers[]> {
    return await this.transfersRepository.find({
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

  createTransfers(transfers: Transfers): Promise<Transfers> {
    return this.transfersRepository.save(transfers);
  }
  async updateTransfers() {
    this.transfersRepository.save({
      bankAccountSender: 3,
      firstNameRecipient: 'Timber',
      lastNameSender: 'Saw',
    });
  }

  async deleteTransfers(transfers: Transfers, _id: number) {
    await this.transfersRepository.find({
      select: {
        id: true,
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
    this.transfersRepository.delete(transfers);
  }
}
