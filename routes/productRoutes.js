const mongoose = require("mongoose");
const Products = mongoose.model("products");

module.exports = (app) => {
  app.get("/api/products", async (req, res) => {
    const products = await Products.find({})
    // console.log(products)
    res.send(products)
  }
  );
}