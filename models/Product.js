const mongoose = require("mongoose");
const { Schema } = mongoose;
//const Schema = mongoose.Schema

//when designing a schema, you can assign a value type or an object.
//with an object the first property must be the type.
const productSchema = new Schema({
  name: String,
  productNumber: Number,
  priceCents: Number,
  description: String,
  images: [String],
  sizes: [String],
  productType: String,
  details: [String],
  fitDetails: [String]
});

mongoose.model("products", productSchema);
