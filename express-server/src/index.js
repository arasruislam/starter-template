import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
   path: "./.env",
});

connectDB()
   .then(() => {
      app.on("error", (error) => {
         console.log("Error: ", error);
         throw error;
      });

      app.listen(process.env.PORT || 3000, () => {
         console.log(`Server is running on port ${process.env.PORT}`);
      });
   })
   .catch((err) => {
      console.log("MongoDB connection failed !!! ", err);
   });

/* 
* first approach with async await
(async () => {
   try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

      app.on("error", (error) => {
         console.log("Error: ", error);
         throw error;
      });

      app.listen(process.env.PORT, () => {
         console.log(`Server is running on port ${process.env.PORT}`);
      });
   } catch (error) {
      console.error("Error: ", error);
      throw error;
   }
})();
*/
