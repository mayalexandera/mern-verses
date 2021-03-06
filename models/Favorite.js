const mongoose = require("mongoose");
const { Schema } = mongoose;

const FavoriteItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product" },
  name: String,
  brandName: String,
  price: Number,
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

FavoriteListSchema.static(
  "findOneOrCreate",
  async function findOneOrCreate(condition, doc) {
    const favoriteList = await this.findOne(condition)
    return favoriteList || this.create(doc)
  }
)

const FavoriteList = mongoose.model('FavoriteList', FavoriteListSchema)
module.exports = FavoriteList