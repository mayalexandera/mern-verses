const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
  cart: { type: Schema.Types.ObjectId, ref: "Cart" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Order', OrderSchema)