const mongoose = require("mongoose");
const { Schema } = mongoose;

//const Schema = mongoose.Schema

//when designing a schema, you can assign a value type or an object.
//with an object the first property must be the type.
const planSchema = new Schema({
  months: Number,
  items: Number,
  trialPrice: {
    price: Number,
    terms: String
  },
  regularPrice: Number,
  features: [String],
  description: String,
  credits: Number,
});

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan
