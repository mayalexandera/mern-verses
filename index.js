const express = require("express");
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./services/passport')

mongoose.connect(keys.mongoURI)

const app = express();

// authRoutes.js exports a module object that returns a function, so this
// registers in JS as the anonymous function call, passing the app argument. 

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);




