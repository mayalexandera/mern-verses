const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product" },
  sizeId: { type: Schema.Types.ObjectId, ref: "Size" },
  orderId: { type: Schema.Types.ObjectId, ref: "Order" },
  count: Number,
});

const OrderItem = mongoose.model("OrderItem", OrderItemSchema);
module.exports = OrderItem;

const OrderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  items: [OrderItemSchema],
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
    default: Date.now(),
  },
  estShipDate: Date,
  deliveredDate: Date,
  shipped: { type: Boolean, default: false },
  delivered: { type: Boolean, default: false },
});

module.exports = mongoose.model("Order", OrderSchema);
