import * as mongoose from 'mongoose';

export interface User extends mongoose.Document {
  reqCounter: number;
  id: number;
  firstName: string;
  lastName: string;
  birthday: number;
  bankAccount: number;
  securityCode: number;
}

const UserSchema = new mongoose.Schema({
  reqCounter: Number,
  id: Number,
  firstName: String,
  lastName: String,
  birthday: Number,
  bankAccount: Number,
  securityCode: Number,
});

export const UserModel = mongoose.model<User>('User', UserSchema);
