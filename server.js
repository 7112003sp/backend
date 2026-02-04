import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import uploadRoutes from "./routes/upload.js";
import recordRoutes from "./Routes/records.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://surya:surya%40123@cluster0.pdqwnfb.mongodb.net/movies"
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });

app.use("/api/upload", uploadRoutes);
app.use("/api/records", recordRoutes);

app.listen(5005, () => console.log("Backend running on 5000"));
