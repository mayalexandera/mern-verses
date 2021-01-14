const mongoose = require("mongoose");
const { Schema } = mongoose;

const FavoriteItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product" },
  sizeId: { type: Schema.Types.ObjectId, ref: "Size" },
  name: String,
  brandName: String,
  price: Number,
  count: Number,
  size: String,
  featuredImage: String
});

const FavoriteItem = mongoose.model("FavoriteItem", FavoriteItemSchema);
module.exports = FavoriteItem


const FavoriteListSchema = new Schema({
  items: [FavoriteItemSchema],
  _id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
    updated: Date,
    created: {
      type: Date,
      default: Date.now,
    },
});
const FavoriteList = mongoose.model('FavoriteList', FavoriteListSchema)
module.exports = FavoriteList