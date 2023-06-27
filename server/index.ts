import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ReceiptModel from "./models/ReceiptModel";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://ivank:fqVGZKfc7ex8ecWw@cluster0.1cfuui7.mongodb.net/peerprint?retryWrites=true&w=majority"
);

app.get("/getReceipts", async (req, res) => {
  try {
    const receipts = await ReceiptModel.find({});
    res.json(receipts);
  } catch (err) {
    res.json(err);
  }
});

app.post("/addReceipt", async (req, res) => {
  try {
    const receipt = new ReceiptModel(req.body);
    await receipt.save();
    res.status(201).json(receipt);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(80, () => {
  console.log("Connected to MongoDB");
});
