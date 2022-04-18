const Checkout = require("../models/checkout");

const saveCheckout = async (checkout) => {
    const newCheckout = new Post(checkout);
    await newCheckout.save();
    return newCheckout;
  };

  module.exports = {
    saveCheckout
  };