const mongoose = require("mongoose");
const { Schema } = mongoose;

const sizeSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  brand: { type: Schema.Types.ObjectId, ref: "Brand" },
  quantity: { type: Number, default: 10 },
  size: String,
  color: String,

});

const Size = mongoose.model("Size", sizeSchema);

module.exports = Size;
