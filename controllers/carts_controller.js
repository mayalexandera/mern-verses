const mongoose = require("mongoose");
const Cart = require("../models/Cart");
exports.fetchCart = async (req, res) => {
  const cart = await Cart.findById(req.user._id, (err) => {
    if (err) {
      console.log(err)
      return res.status(400).json({ error: "Your request could not be processed."})
    }
  });
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
    size: req.body.params.size,
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
    res.send(cart);
  } else {
    cart = new Cart({ _id: req.user._id, items: [newFavorite] });
    res.send(cart);
  }
};
