// External Imports
import dotenv from "dotenv";

// Internal Imports
import connectDb from "./db/index.js";

// Load environment variables
dotenv.config({ path: "./.env" });

// Connect to MongoDB
connectDb();
