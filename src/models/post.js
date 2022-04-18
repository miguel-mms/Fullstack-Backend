const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    description: {
      type: String,
      required: false,
    },
    price: {
      type: String,
      required: true,
    }
  }
);

const PostModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;
