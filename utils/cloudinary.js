import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_NAME,
  CLOUDINARY_KEY_API,
  CLOUDINARY_KEY_SECRET,
} from "../config.js";

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY_API,
  api_secret: CLOUDINARY_KEY_SECRET,
  secure: true,
});

export async function uploadImage(filePath) {
  return await cloudinary.uploader.upload(filePath, {
    folder: "replit",
  });
}

export async function removeImage(public_id){
  return await cloudinary.uploader.destroy(public_id)
}