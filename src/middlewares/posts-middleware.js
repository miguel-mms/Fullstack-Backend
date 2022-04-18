const validatePost = (req, res, next) => {
  const post = req.body;

  const productName = post.productName?.trim?.() ?? "";
  if (productName === "") {
    return res.status(400).json({ message: "Product name is required" });
  }

  // const imgUrl = post.imgUrl?.trim?.() ?? "";
  // if (imgUrl === "") {
  //   return res.status(400).json({ message: "An image is required" });
  // }

  const price = post.price?.trim?.() ?? "";
  if (price === "") {
    return res.status(400).json({ message: "Price is required" });
  }

  next();
};

module.exports = {
  validatePost,
};
