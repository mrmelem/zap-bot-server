const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    category: String,
    subcategory: String,
    available: String,
    info: {
      haveAdds: Boolean,
      adds: String,
      haveOptionToBread: Boolean,
      breads: Array,
      haveOptionToSauce: Boolean,
      sauces: Array,
      haveOptionToPasta: Boolean,
      pastas: Array,
      haveOptionToSalads: Boolean,
      saladas: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("products/item", DataSchema);
