const mongoose = require("mongoose");
const Products = mongoose.model("Product");

module.exports = (app) => {
  app.get("/api/products", async (req, res) => {
    const products = await Products.find({});
    // console.log(products)
    res.send(products);
  });

  app.get("/api/products/:id", async (req, res) => {
    const product = await Products.find({ _id: req.query.productId });
    res.send(product[0]);
  });
  app.get("/api/products", async (req, res) => {
    const products = await Products.find({ _id: { $in: req.user.favorites }});
    res.send(products)
  });
};
