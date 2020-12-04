//initial app setup

const express = require("express");
const mongoose = require("mongoose");

//enables cookies, allowing Express to handle them.
const cookieSession = require("cookie-session");

const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

// authRoutes.js exports a module object that returns a function, so this
// registers in JS as the anonymous function call, passing the app argument.

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
