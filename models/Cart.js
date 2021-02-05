const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product" },
  sizeId: { type: Schema.Types.ObjectId, ref: "Size" },
  name: String,
  brandName: String,
  price: Number,
  count: Number,
  featuredImage: String,
});

const CartItem = mongoose.model("CartItem", CartItemSchema);
module.exports = CartItem;

const CartSchema = new Schema({
  items: [CartItemSchema],
  totals: {
    subTotal: Number,
    default: 0,
    total: { type: Number, default: 0, min: 0 },
    discountTotal: Number,
    default: 0,
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

CartSchema.methods.createOrUpdateItem = function createOrUpdateItem(
  sizeId,
  callback
) {
  return this.model("Cart").find({ sizeId: sizeId }, callback);
};

CartSchema.static(
  "findOneOrCreate",
  async function findOneOrCreate(condition, doc) {
    const cart = await this.findOne(condition);

    return cart || this.create(doc);
  }
);

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
