const mongoose = require("mongoose");
const Product = mongoose.model('products')

import expressAsyncHandler from 'express-async-handler'

module.exports = (app) => {
  app.get('/seed', expressAsyncHandler(async(req,res) => {

  }))
}