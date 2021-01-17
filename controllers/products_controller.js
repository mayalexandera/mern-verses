const mongoose = require("mongoose");
const Product = require("../models/Product");
const Category = require("../models/Category");

exports.fetchProdByCat = async (req, res) => {
  const products = await Category.find({ name: req.params.category })
    .populate({ path: "products" })
    .exec((err) => {
      if (err) {
        res.sendStatus(400).json({ error: error });
      }
    });
  res.send(products);
};

exports.fetchCategories = async (req, res) => {
  const categories = await Category.find({}, (err) => {
    if (err) {
      res.sendStatus(400).json({ error: error });
    }
  });
  const names = categories.map((category) => category.name);
  res.send(names);
};

exports.fetchProducts = async (req, res) => {
  const products = await Product.find({}, (err) => {
    if (err) {
      res.sendStatus(400).json({ error: error });
    }
  });
  res.send(products);
};

exports.fetchProdById = async (req, res) => {
  const product = await Product.find({ _id: req.query.productId })
    .populate({
      path: "productSizes",
      match: { quantity: { $gte: 1 } },
    })
    .exec((err) => {
      if (err) {
        res.sendStatus(400).json({ error: error });
      }
    });
  res.send(product[0]);
};
