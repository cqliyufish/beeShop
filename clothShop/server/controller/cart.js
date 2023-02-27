const Cart = require("../models/Cart");
///////////////////////////////////  get all carts ////////////////////////////////////
exports.getCarts = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    return res.status(500).json(err);
  }
};
///////////////////////////////////  get a Cart by userID ////////////////////////////////////
exports.getCart = async (req, res) => {
  // get cart by userId
  try {
    // console.log("find cart, userID", req.params.userId);
    const cart = await Cart.findOne({ userId: req.params.userId });
    // console.log("cart", cart);
    res.status(200).json(cart);
  } catch (err) {
    return res.status(500).json(err);
  }
};
///////////////////////////////////  create  a Cart  ////////////////////////////////////

exports.createCart = async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    return res.status(500).json(err);
  }
};

///////////////////////////////////  update a Cart  ////////////////////////////////////

exports.updateCart = async (req, res) => {
  // change other info
  try {
    console.log("try to update cart :", req.params.cartId);
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.cartId,
      {
        $set: req.body,
      },
      { new: true } //{ new : true } will return the modified document rather than the original
    );

    console.log("updatedCart is:", updatedCart);
    res.status(200).json(updatedCart);
  } catch (err) {
    return res.status(500).json(err);
  }
};

///////////////////////////////////  del a Cart  ////////////////////////////////////

exports.deleteCart = async (req, res) => {
  console.log("del cart", req.params.cartId);
  try {
    await Cart.findByIdAndDelete(req.params.cartId);
    res.status(200).json("Cart has been deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
};
