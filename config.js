import dotenv from 'dotenv';

dotenv.config();

export const MONGODB_API_URI = process.env['MONGODB_API_URI'];

export const CLOUDINARY_NAME = process.env['CLOUDINARY_NAME'];
export const CLOUDINARY_KEY_API = process.env['CLOUDINARY_KEY_API'];
export const CLOUDINARY_KEY_SECRET = process.env['CLOUDINARY_KEY_SECRET'];
