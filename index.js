//initial app setup

const express = require("express");
const mongoose = require("mongoose");

//enables cookies, allowing Express to handle them.
const cookieSession = require("cookie-session");

// Express passes along cookies to passport middleware to manage authentication
const passport = require("passport");

/*
 body-parser is an express middleware that instructs express
 to parse request body and make available to application.

 when you make a POST request to express server express DOES NOT
 by default parse the request Body.
*/
const bodyParser = require("body-parser");

//logic to determine environment
const keys = require("./config/keys");

//mongoose Schemas
require("./models/User");
require("./models/Survey");
require("./models/Plan");
require("./models/Brand");
require("./models/Product");
require("./models/Size");

//o auth strategy configuration
require("./services/passport");

// connects mongoose to mongoDB
// mongoose.connect(keys.mongoURI);
mongoose.connect(keys.mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
//create app variable that returns express server function
const app = express();

/*
Telling express server that any request with a request body
will now use bodyParser to parse body and assign it to the req.body property
of the incoming request object
*/
app.use(bodyParser.json());

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

/* authRoutes.js, billingRoutes.js, surveyRoutes.js are exports a module object that returns a function, so this
registers in JS as the anonymous function call, passing the app argument.
*/
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);
require("./routes/planRoutes")(app);
require("./routes/productRoutes")(app);
require("./routes/sizeRoutes")(app);
require("./routes/favoriteRoutes")(app);

if (process.env.NODE_ENV === "production") {
  /*
   express will serve up production assets.
    like main.js, main.css...

   express will serve up the index.html file if it doesn't recognize the route.

  basically if the route isn't in either authRoutes || billngRoutes, look in the client/build dir.
  */
  app.use(express.static("client/build"));

  // catch all statement, if there is no route handler,
  // the file isn't in client/build,
  // serve back index.html
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

//sets PORT to either prod environment variable PORT, or local port 5000.
const PORT = process.env.PORT || 5000;

// spins up server with express' 'listen' function
app.listen(PORT);
