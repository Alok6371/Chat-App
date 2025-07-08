import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
Cannot find package 'cloudinary' imported from /workspaces/Chat-App/backend/db/cloudinary.js
export default cloudinary;