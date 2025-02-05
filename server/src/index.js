// External Imports
import dotenv from "dotenv";

// Internal Imports
import { app } from "./app.js";
import connectDb from "./db/index.js";

// Load environment variables
dotenv.config({ path: "./.env" });

// Connect to MongoDB
connectDb()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });
    
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on PORT: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed ! ", error);
  });
