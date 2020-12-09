//initial app setup

const express = require("express");
const mongoose = require("mongoose");

//enables cookies, allowing Express to handle them.
const cookieSession = require("cookie-session");

// Express passes along cookies to manage authentication
const passport = require("passport");

const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

// connects mongoose to mongoDB
mongoose.connect(keys.mongoURI);

const app = express();
 
/* 
this app.use() function tells passport to make use of cookies, takes one argument which is function 'cookieSession()'
*/
app.use(
  /* cookieSession() takes in a configuration object which expects two properties:
      maxAge: maximum amount of time a cookie can be stored in the browser before it is automatically  expired. *** PASSED IN as a NUMBER in MILLISECONDS
      keys: a key used to encrypt/assigned our cookie. (store in secret file)
*/
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

// telling passport to implement cookies for authentication
app.use(passport.initialize());
app.use(passport.session());

// authRoutes.js exports a module object that returns a function, so this
// registers in JS as the anonymous function call, passing the app argument.

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
