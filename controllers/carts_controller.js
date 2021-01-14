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
      name: req.body.params.name,
      brandName: req.body.params.brandName,
      price: req.body.params.price,
      count: req.body.params.count,
      size: req.body.params.size,
      featuredImage: req.body.params.featuredImage,
    };

  console.log(cart[0], cart)
  cart[0].items.push(newCartItem)
  await cart[0].save()
  res.send(cart[0])

};
