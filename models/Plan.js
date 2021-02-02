const mongoose = require("mongoose");
const { Schema } = mongoose;

const planSchema = new Schema({
  features: [String],
  tiers: [Object]
});

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan
