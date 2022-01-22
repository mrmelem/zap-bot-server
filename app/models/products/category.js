const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    title: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("products/category", DataSchema);
