const mongoose = require("mongoose");
const { Schema } = mongoose;
//const Schema = mongoose.Schema

//when designing a schema, you can assign a value type or an object.
//with an object the first property must be the type.
const productSchema = new Schema({
  name: String,
  price: String,
  category: String,
  description: String,
  fitDetails: Object,
  productDetails: Array,
  images: Object,
  productSizes:[{
    type: Schema.Types.ObjectId, ref: "Size"
  }],
  brand: { type: Schema.Types.ObjectId, ref: "Brand" },
});

mongoose.model("products", productSchema);
