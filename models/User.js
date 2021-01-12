const mongoose = require('mongoose')
const { Schema } = mongoose
const FavoriteSchema = require('./Favorite')
//const Schema = mongoose.Schema

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
  cart: [{ type: Schema.Types.ObjectId, ref: 'CartItem' }],
  favorites: [FavoriteSchema],
  purchasedTrial: { type: Boolean, default: false }
});

const User = mongoose.model('User', UserSchema);

UserSchema.pre('remove', function(next) {
  const CartItem = mongoose.model('CartItem')

  CartItem.deleteMany({ _id: { $in: this.cart }})
  .then(() => next())
})

module.exports = User;