const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("User");

/* 
  serializeUser() takes two arguments, first is the user object,
  second is a callback function, done().
  done() takes a piece of identifying information and put it inside of the cookie.
*/
passport.serializeUser((user, done) => {
  /*
    done is a callback function provided by passport library.
    it takes two arguments. first argument is an 'error object',
    2nd is the unique identifying piece of data.
  */
  done(null, user.id);
  /*  
     user.id: user is a property coming from an entry
     in mongoDB collection "users"('_id').
     user.id here is a unique identifier generated by Mongo,
     which is assigned to that particular entry at time of entry creation.
    */
});

/*
  deserializeUser() takes a piece of identifying information
  and REMOVES from the cookie.
*/
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log(profile);
      const existingUser = await User.findOne({
        googleId: profile.id,
      });

      if (existingUser) {
        // console.log(accessToken, refreshToken)
        return done(null, existingUser, accessToken);
      } else {
        const user = await new User({
          googleId: profile.id,
          displayName: profile.displayName,
          familyName: profile.name.familyName,
          givenName: profile.name.givenName,
          email: profile.emails[0].value,
          dateJoined: Date.now(),
          photoUrl: profile.photos[0].value,
        }).save();
        done(null, user);
      }
    }
  )
);
