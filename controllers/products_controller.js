const mongoose = require("mongoose");
const Product = require("../models/Product");

exports.fetchProdByCat = async (req, res) => {
  console.log(req.params)
  const products = await Product.find({ category: req.params.category });
  console.log(products);
  res.send(products)
};

exports.fetchProducts = async (req, res) => {
  const products = await Product.find({});
  res.send(products);
};

exports.fetchProdById = async (req, res) => {
  const product = await Product.find({ _id: req.query.productId })
    .populate({
      path: "productSizes",
      match: { quantity: { $gte: 1 } },
    })
    .exec();
  res.send(product[0]);
};
