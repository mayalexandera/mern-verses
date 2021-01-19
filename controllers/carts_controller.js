const mongoose = require("mongoose");
const Cart = require("../models/Cart");

exports.fetchCart = async (req, res) => {
  const cart = await Cart.findById(req.user._id)
    .populate({
      path: "items",
      populate: { path: "productId", populate: { path: "productSizes" } },
    })
    .exec();
  res.send(cart);
};

exports.addToCart = async (req, res) => {
  let cart;
  const newCartItem = {
    productId: req.body.params.productId,
    sizeId: req.body.params.sizeId,
    name: req.body.params.name,
    brandName: req.body.params.brandName,
    price: req.body.params.price,
    count: req.body.params.count,
    featuredImage: req.body.params.featuredImage,
  };
  cart = await Cart.findById(req.user._id, (err) => {
    if (err) {
      console.log(err);
      return res
        .status(400)
        .json({ error: "Your request could not be processed." });
    }
  });
  if (cart) {
    cart.items.push(newCartItem);
    await cart.save();
    const result = await Cart
      .findById(req.user._id)
      .populate({
        path: "items",
        populate: { path: "productId", populate: { path: "productSizes" } },
      })
      .exec();
    res.send(result);
  } else {
    cart = new Cart({ _id: req.user._id, items: [newCartItem] });
    res.send(cart);
  }
};

exports.deleteCartItem = async (req, res) => {
  const cart = await Cart.findById(req.user._id);
  const newList = await cart.items.filter(
    (item) => item._id.toString() !== req.params.cartItemId.toString()
  );
  cart.items = newList;
  await cart.save();
  res.send(cart);
};

exports.updateCartItem   = async (req, res) => {
  const cart = await Cart.findById(req.user._id);
  const items = [];
  
  cart.items.map((item) => {
    const value = req.body.value;
    const field = req.body.field;
    if (item._id.toString() === req.params.cartItemId.toString()) {
      item[field] = value;
      items.push(item);
    }
  });
  cart.items = items;
  await cart.save();
  const result = await Cart.findById(req.user._id)
    .populate({
      path: "items",
      populate: { path: "productId", populate: { path: "productSizes" } },
    })
    .exec();
  res.send(result);
};
