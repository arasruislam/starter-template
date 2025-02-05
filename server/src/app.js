// External Import
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

// Create app
const app = express();

// Middleware Config
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes Import
// import userRouter from "./routes/user.routes.js";

// Routes Declaretion
// app.use("/api/v1/users", userRouter);

// Export App
export { app };
