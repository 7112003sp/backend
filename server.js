import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import uploadRoutes from "./Routes/upload.js";
import recordRoutes from "./Routes/records.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });

app.use("/api/upload", uploadRoutes);
app.use("/api/records", recordRoutes);

app.listen(process.env.PORT || 5005, () =>
  console.log("Backend running")
);
