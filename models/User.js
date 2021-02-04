
const mongoose = require("mongoose");
const { Schema } = mongoose;

//when designing a schema, you can assign a value type or an object.
//with an object the first property must be the type.
const MembershipSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  credits: { type: Number, default: 0, min: [ 0, 'Too few credits'] },
  items: Number,
});

const Membership = mongoose.model("Membership", MembershipSchema);

module.exports = Membership;

const UserSchema = new Schema({
  googleId: String,
  displayName: String,
  givenName: String,
  familyName: String,
  email: String,
  photoUrl: String,
  membership: [MembershipSchema],
  dateJoined: Date,
  credits: { type: Number, default: 0 },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
