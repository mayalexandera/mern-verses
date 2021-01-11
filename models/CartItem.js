const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CartItemSchema = new Schema({
  size: { type: Schema.Types.ObjectId, ref: 'Size' }
})

const CartItem = mongoose.model('CartItem', CartItemSchema)

module.exports = CartItem