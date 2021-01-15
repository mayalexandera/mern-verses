const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product" },
  sizeId: { type: Schema.Types.ObjectId, ref: "Size" },
  name: String,
  brandName: String,
  price: Number,
  count: Number,
  size: String,
  featuredImage: String
});

const CartItem = mongoose.model('CartItem', CartItemSchema)
module.exports = CartItem


const CartSchema = new Schema({
  items: [CartItemSchema],
  totals: {
    subTotal: Number, default: 0,
    total: Number, default: 0,
    quantity: Number, default: 0,
    discountTotal: Number, default: 0
  },
  _id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

const Cart = mongoose.model('Cart', CartSchema)
module.exports = Cart