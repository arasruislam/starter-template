// External Import
import mongoose from "mongoose";

// Internal Import
import { DB_NAME } from "../constants.js";

// Connect to MongoDB using Mongoose
const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
    );

    console.log(
      `Connected to MongoDB: ${DB_NAME} | DB_HOST: ${connectionInstance.host}`
    );
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
    process.exit(1);
  }
};

export default connectDb;
