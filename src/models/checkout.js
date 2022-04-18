const mongoose = require("mongoose");

const CheckoutSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    }
  }
);

const CheckoutModel = mongoose.model("Checkout", CheckoutSchema);

module.exports = CheckoutModel;