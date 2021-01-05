const mongoose = require("mongoose");
const { Schema } = mongoose;

//const Schema = mongoose.Schema

//when designing a schema, you can assign a value type or an object.
//with an object the first property must be the type.
const planSchema = new Schema({
  months: Number,
  items: Number,
  trialPrice: Object,
  regularPrice: String,
  features: [String],
  description: String
});

mongoose.model("plans", planSchema);
