import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { Cards } from './cards/cards.entity';
import { CardsModule } from './cards/cards.module';
import { TransfersModule } from './transfers/transfers.module';
import { Transfers } from './transfers/transfer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'apiDatabase',
      synchronize: true,
      dropSchema: true,
      entities: [User, Cards, Transfers],
    }),
    UsersModule,
    CardsModule,
    TransfersModule,
  ],
})
export class AppModule {}
