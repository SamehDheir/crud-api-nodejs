const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "this fild is required"],
    },
    quantity: {
      type: Number,
      required: [true, "this fild is required"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "this fild is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
