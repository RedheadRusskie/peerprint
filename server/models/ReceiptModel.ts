import mongoose from "mongoose";

const ReceiptSchema = new mongoose.Schema({
  service: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: false,
  },
  total: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
  surname: {
    type: String,
    required: false,
  },
});

const ReceiptModel = mongoose.model("receipts", ReceiptSchema);

export default ReceiptModel;
