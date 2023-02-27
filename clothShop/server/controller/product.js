const Product = require("../models/Product");

///////////////////////////////////  get all products  ////////////////////////////////////
exports.getAllProducts = async (req, res) => {
  const category = req.query.category;
  const latest = req.query.new;
  // console.log("category", category);
  // console.log("latest", latest);
  try {
    let products;
    if (latest) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (category) {
      products = await Product.find({ categories: { $in: [category] } });
    } else {
      products = await Product.find();
      // console.log("products", products);
    }
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json(err);
  }
};
///////////////////////////////////  get a product  ////////////////////////////////////
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);

    res.status(200).json(product);
  } catch (err) {
    return res.status(500).json(err);
  }
};
///////////////////////////////////  create  a product  ////////////////////////////////////

exports.createProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    return res.status(500).json(err);
  }
};

///////////////////////////////////  update a product  ////////////////////////////////////

exports.updateProduct = async (req, res) => {
  // change other info
  console.log("update info", req.body);
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.productId,
      {
        $set: req.body,
      },
      { new: true } //{ new : true } will return the modified document rather than the original
    );

    console.log("updatedProduct is:", updatedProduct);
    res.status(200).json(updatedProduct);
  } catch (err) {
    return res.status(500).json(err);
  }
};

///////////////////////////////////  del a product  ////////////////////////////////////

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.productId);
    // console.log("del product:", req.params.productId);
    res.status(200).json("Product has been deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
};
