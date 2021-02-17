const mongoose = require("mongoose");
const Product = require("../models/Product");
const Category = require("../models/Category");

exports.fetchProdByCat = async (req, res) => {
  try {
    const query = {_id: req.params.categoryId}
    const products = await Category.find(query).populate("products").exec();

    res.send(products);
  } catch (error) {
    res.send({ errorStatus: 400, message: "0 products found."})
  }

};

exports.fetchCategories = async (req, res) => {
  const categories = await Category.find({});
  res.send(categories);
};

exports.fetchProducts = async (req, res) => {
  try {
    const products = await Product.find({})
    res.send(products);
  } catch (error) {
    res.send({ errorState: 400, message: "0 products found."})
  }
};

exports.fetchProdById = async (req, res) => {
  const query = { _id: req.params.id };
  const product = await Product.findOne(query)
    .populate({
      path: "productSizes",
      match: { quantity: { $gte: 1 } },
    })
    .exec();
  res.send(product);
};

exports.fetchProdByFilter = async (req, res) => {
  console.log(req)
  let response;
  const kind = req.params.type;
  const val = req.params.value;
  if (req.params.type === "expression" || req.params.type === "occasion") {
    response = await Product.find({ tags: { $in: val } });
  }

  if (req.params.type === "price") {
    const nums = req.params.value.split("-");
    const[ min, max ] = [Number(nums[0]), Number(nums[1])];

    response = await Product.find({ price: { $gte: min, $lte: max } });

  } else if (req.params.type === "brandName") {

    const query = { [kind]: val };
    response = await Product.find(query);
  }

  res.send(response);
};
