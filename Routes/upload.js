import express from "express";
import multer from "multer";
import fs from "fs";
import csv from "csv-parser";
import Record from "../models/Record.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), (req, res) => {
  const rows = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", data => rows.push(data))
    .on("end", () => {
      // ASYNC BACKGROUND PROCESSING
      setTimeout(async () => {
        for (let r of rows) {
          await Record.create({
            transactionId: r.transactionId,
            amount: Number(r.amount),
            referenceNumber: r.referenceNumber,
            date: new Date(r.date),
            status: "UNMATCHED"
          });
        }
        console.log("File processed");
      }, 0);

      res.json({ message: "File processing started" });
    });
});

export default router;
