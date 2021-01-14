const mongoose = require('mongoose');
const { Schema } = mongoose

//when designing a schema, you can assign a value type or an object.  
//with an object the first property must be the type.
const UserSchema = new Schema({
  googleId: String,
  displayName: String,
  givenName: String,
  familyName: String,
  email: String,
  photoUrl: String,
  dateJoined: Date,
  credits: { type: Number, default: 0 },
  purchasedTrial: { type: Boolean, default: false }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;