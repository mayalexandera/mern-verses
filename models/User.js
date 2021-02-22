
const mongoose = require("mongoose");
const { Schema } = mongoose;

const MembershipSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  credits: { type: Number, default: 0, min: [ 0, 'Too few credits'] },
  items: Number,
});

const Membership = mongoose.model("Membership", MembershipSchema);

module.exports = Membership;

const addressSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  givenName: String,
  familyName: String,
  
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
    required: false,
  },
  locality: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  code: {
    type: Number,
    required: true,
  },
  country: String,
  email: String,
});

const address = mongoose.model("address", addressSchema)

module.exports = address;

const UserSchema = new Schema({
  googleId: String,
  addresses: [addressSchema],
  displayName: String,
  givenName: String,
  familyName: String,
  email: String,
  photoUrl: String,
  membership: [MembershipSchema],
  dateJoined: Date,
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
