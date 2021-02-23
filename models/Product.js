const mongoose = require("mongoose");
const { Schema } = mongoose;
//const Schema = mongoose.Schema

//when designing a schema, you can assign a value type or an object.
//with an object the first property must be the type.
const productSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  fitDetails: Object,
  productDetails: Array,
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
  images: Object,
  tags: [String],
  productSizes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Size",
    },
  ],
  brand: { type: Schema.Types.ObjectId, ref: "Brand" },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
