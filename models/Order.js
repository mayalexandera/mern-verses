const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
  cart: { type: Schema.Types.ObjectId, ref: "Cart" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  totals: {
    subTotal: Number,
    default: 0,
    total: Number,
    default: 0,
    discountTotal: Number,
    default: 0,
    estTax: Number,
    default: 0,
    estShipping: Number,
    default: 0,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', OrderSchema)