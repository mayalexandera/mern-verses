const mongoose = require("mongoose");
const { Schema } = mongoose;

const FavoriteSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  size: { type: Schema.Types.ObjectId, unique: true, ref: "Size" },
});

module.exports = FavoriteSchema;
