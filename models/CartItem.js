const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CartItemSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  size: { type: Schema.Types.ObjectId, ref: "Size" },
  name: String,
  price: Number,
  count: Number
});

module.exports = CartItemSchema