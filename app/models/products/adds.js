const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    item: String,
    subcategory: String,
    title: String,
    price: Number,
    description: String,
    available: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("products/adds", DataSchema);
