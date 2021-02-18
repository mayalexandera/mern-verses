const mongoose = require("mongoose");
const Size = require("../models/Size");
const Order = require("../models/Order");
const User = require("../models/User");

exports.placeOrder = async (req, res) => {
  const cartId = req.body.cartId;
  const items = req.body.items;
  const totals = req.body.totals;
  const user = req.user._id;

  const order = new Order({
    cartId,
    items,
    totals,
    user,
  });
  await order.save();

  const newUser = await User.findById(user);
  newUser.membership[0].credits -= 1;
  await newUser.save();

  const orderDoc = await Order.findById(order._id)
    .populate({ path: "items", populate: { path: "productId" } })
    .populate({ path: "items", populate: { path: "sizeId" } })
    .populate("user")
    .exec();

  orderDoc.items.map(async (item) => {
    const size = await Size.findById(item.sizeId);
    size.quantity -= item.count;
    await size.save();
  });
  await orderDoc.save();

  const newOrder = await Order.findById(order._id)
    .populate({ path: "items", populate: { path: "productId" } })
    .populate({ path: "items", populate: { path: "sizeId" } })
    .populate("user")
    .exec();

  res.send(newOrder);
};

exports.fetchOrders = async (req, res) => {
  const user = req.user._id;
  const query = { user };
  const orders = await Order.find(query)
    .populate({ path: "items", populate: { path: "productId" } })
    .populate({ path: "items", populate: { path: "sizeId" } })
    .exec();

  res.send(orders);
};

