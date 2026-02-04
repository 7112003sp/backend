import express from "express";
import Record from "../models/Record.js";
import AuditLog from "../models/AuditLog.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const records = await Record.find();
  res.json(records);
});

router.put("/:id", async (req, res) => {
  const oldRecord = await Record.findById(req.params.id);

  const updated = await Record.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  await AuditLog.create({
    recordId: oldRecord._id,
    oldValue: oldRecord,
    newValue: updated,
    changedBy: "Analyst"
  });

  res.json(updated);
});

export default router;
