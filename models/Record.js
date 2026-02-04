import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
  transactionId: String,
  amount: Number,
  referenceNumber: String,
  date: Date,
  status: String
});

export default mongoose.model("Record", recordSchema);
