const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cartSchema = new Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    products: [
      {
        productId: { type: String, require: true },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Cart", cartSchema);
