import { UserDto } from '../dtos/user.dto';
import mongoose from 'mongoose';
import { UserModel } from '../users/user.model';
import { INestApplication } from '@nestjs/common';

function displayMenu() {
  console.log('Welcome to the CLI Menu!');
  console.log('1. Add user');
  console.log('2. Show all users');
  console.log('3. Option 3');
  console.log('0. Exit');
  console.log('------------------------');
}

async function handleInput(
  input: string,
  usersToAdd: UserDto[],
  app: INestApplication,
) {
  switch (input) {
    case '1':
      await UserModel.create(usersToAdd);
      console.log('User added, check database');
      break;
    case '2':
      const users = await UserModel.find({});
      console.log('All Users:');
      console.log(users);
      break;
    case '0':
      console.log('Exiting...');
      app.close();
      process.exit(0);
    default:
      console.log('Invalid option, please try again.');
      break;
  }
}

export async function addUserMenu(app: INestApplication) {
  await mongoose.connect('mongodb://localhost:27017/onlineBanking');

  const usersToAdd: UserDto[] = [
    {
      reqCounter: 253,
      id: 1,
      firstName: 'Anna',
      lastName: 'Smith',
      birthday: 2252252,
      bankAccount: 12345,
      securityCode: 123,
    },
  ];

  displayMenu();

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question('Select an option: ', (input) => {
    handleInput(input, usersToAdd, app);
    addUserMenu(app); // Display menu again after handling input
  });
}
