const mongoose = require("mongoose");
const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  let cart
  cart = await Cart.find({ _id: req.user._id })
  if(!cart) {
    cart = new Cart({ _id: req.user._id })
  }

    const newCartItem = {
      productId: req.body.params.productId,
      sizeId: req.body.params.sizeId,
      count: req.body.params.count,
      price: req.body.params.price,
      name: req.body.params.name,
      size: req.body.params.size,
      featuredImage: req.body.params.featuredImage,
    };

  console.log(cart[0], cart)
  cart.items.push(newCartItem)
  await cart.save()
  res.send(cart)

};
