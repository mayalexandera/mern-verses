//initial app setup

const express = require("express");
const mongoose = require("mongoose");

//enables cookies, allowing Express to handle them.
const cookieSession = require("cookie-session");

// Express passes along cookies to passport middleware to manage authentication
const passport = require("passport");

/*
 body-parser is an express middleware that instructs express to parse request body and make available to application.

 when you make a POST request to express server express DOES NOT by default parse the request Body.
*/
const bodyParser = require("body-parser");

//logic to determine environment
const keys = require("./config/keys");

//mongoose User Schema
require("./models/User");

//o auth strategy configuration
require("./services/passport");

// connects mongoose to mongoDB
mongoose.connect(keys.mongoURI);

//create app variable that returns express server function
const app = express();
 
//Telling express server (app.use()) to use cookieSession to make use of/set cookies retrieved from the browser.
app.use(
  /* cookieSession() is an express middleware that takes in a configuration object which expects two properties:

      maxAge: maximum amount of time a cookie can be stored in the browser before it is automatically expired.

      *** PASSED IN as a NUMBER in MILLISECONDS ***

      keys: a key used to encrypt/assigned our cookie. (store in secret file, can be any random string)
*/
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

// Telling express server(app.use()) to connect to passport to implement cookies for authentication (passport.initialize(), passport.session())
app.use(passport.initialize());
app.use(passport.session());

// Telling express server that any request with a request body will now use bodyParser to parse body and assign it to the req.body property of the incoming request object
app.use(bodyParser.json())

/* authRoutes.js, billingRoutes.js both exports a module object that returns a function, so this
registers in JS as the anonymous function call, passing the app argument.
*/ 
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

//sets PORT to either prod environment variable PORT, or local port 5000.
const PORT = process.env.PORT || 5000;

// spins up server with express' 'listen' function
app.listen(PORT);
