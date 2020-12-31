const mongoose = require("mongoose");
const { Schema } = mongoose;
const ProductSchema = require("./Product");

//const Schema = mongoose.Schema

//when designing a schema, you can assign a value type or an object.
//with an object the first property must be the type.
const brandSchema = new Schema({
  name: String,
  url: String,
  sizeChart: String,
  products: [ProductSchema]
});

mongoose.model("brands", brandSchema);
