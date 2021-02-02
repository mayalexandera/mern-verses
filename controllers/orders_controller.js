const mongoose = require("mongoose");
const Cart = require("../models/Cart");
const Order = require("../models/Order");
const Product = require("../models/Product");

exports.placeOrder = async (req, res) => {
    const cart = req.body.cartId;
    const totals = req.body.totals;
    const user = req.user._id;

    const order = new Order({
      cart,
      totals,
      user,
    });
    await order.save();

    const orderDoc = await Order.findById(order._id).populate("cart").populate({ path: "items", populate: { path: 'productId' } }).populate("user");

    const newOrder = {
      _id: orderDoc._id,
      created: orderDoc.created,
      user: orderDoc.user,
      totals: orderDoc.totals,
      products: orderDoc.cart.items,
    };
    
    res.send(newOrder);
};
