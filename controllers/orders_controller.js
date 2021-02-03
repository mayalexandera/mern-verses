const mongoose = require("mongoose");
const Size = require("../models/Size");
const Order = require("../models/Order");
const User = require("../models/User");

exports.placeOrder = async (req, res) => {
  const cart = req.body.cartId;
  const totals = req.body.totals;
  const userId = req.user._id;

  const order = new Order({
    cart,
    totals,
    userId,
  });
  await order.save();

  const user = await User.findById(userId);
  user.membership[0].credits -= 1;
  await user.save();

  const orderDoc = await Order.findById(order._id)
    .populate("cart")
    .populate({ path: "items", populate: { path: "productId" } })
    .populate("user");

  orderDoc.cart.items.map(async (item) => {
    const size = await Size.findById(item.sizeId);
    size.quantity -= item.count;
    await size.save();
  });
  const newOrder = {
    _id: orderDoc._id,
    created: orderDoc.created,
    user: orderDoc.user,
    totals: orderDoc.totals,
    products: orderDoc.cart.items,
  };

  res.send(newOrder);
};
