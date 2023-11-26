// mongodb/mongodb.service.ts

import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Injectable()
export class MongoDBService {
  private readonly client: MongoClient;

  constructor() {
    // Initialize your MongoDB connection
    this.client = new MongoClient('mongodb://localhost:27017', {});
  }

  async connect(): Promise<void> {
    await this.client.connect();
  }

  getDatabase(databaseName: string) {
    return this.client.db(databaseName);
  }

  // Add other MongoDB-related methods as needed
}
