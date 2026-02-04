import mongoose from "mongoose";

const auditSchema = new mongoose.Schema({
  recordId: mongoose.Schema.Types.ObjectId,
  oldValue: Object,
  newValue: Object,
  changedBy: String,
  changedAt: { type: Date, default: Date.now }
});

export default mongoose.model("AuditLog", auditSchema);
