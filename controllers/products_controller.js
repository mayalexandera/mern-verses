const mongoose = require("mongoose");
const Product = require("../models/Product");
const Category = require("../models/Category");

exports.fetchProdByCat = async (req, res) => {
  const query = { name: req.params.category}
  const products = await Category.findOne(query)
    .populate('products')
    .exec();
  res.send(products);
};

exports.fetchCategories = async (req, res) => {
  const categories = await Category.find({});
  const names = categories.map(cat => cat.name)
  res.send(names);
};

exports.fetchProducts = async (req, res) => {
  const products = await Product.find({}, (err) => {
    if (err) {
      console.log(err);
      return res
        .status(400)
        .json({ error: "Your request could not be processed." });
    }
  });
  res.send(products);
};

exports.fetchProdById = async (req, res) => {
  const product = await Product.findOne(req.query.productId)
    .populate({
      path: "productSizes",
      match: { quantity: { $gte: 1 } },
    })
    .exec();
  res.send(product);
};
