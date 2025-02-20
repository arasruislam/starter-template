// External Import
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload File
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // File upload successfully
    // console.log("File is upload on cloudinary: ", response.url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    // remove the uploaded file
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
