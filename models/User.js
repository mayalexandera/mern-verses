const mongoose = require('mongoose')
const { Schema } = mongoose
//const Schema = mongoose.Schema

//when designing a schema, you can assign a value type or an object.  
//with an object the first property must be the type.
const userSchema = new Schema({
  googleId: String,
  displayName: String,
  givenName: String,
  familyName: String,
  email: String,
  photoUrl: String,
  dateJoined: Date,
  credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);