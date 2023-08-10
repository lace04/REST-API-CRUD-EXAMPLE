import mongoose from 'mongoose';
import { MONGODB_API_URI } from '../config.js';
mongoose.set('strictQuery', false);

export async function connectToDB() {
  try {
    await mongoose.connect(MONGODB_API_URI);
    console.log('DB CONNECTED');
  } catch (error) {
    console.error(error);
  }
}
