const mongoose = require("mongoose");
const Product = require("../models/Product");
const Category = require("../models/Category");

exports.fetchProdByCat = async (req, res) => {
  const query = { name: req.params.category };
  const products = await Category.findOne(query).populate("products").exec();
  res.send(products);
};

exports.fetchCategories = async (req, res) => {
  const categories = await Category.find({});
  const names = categories.map((cat) => cat.name);
  res.send(names);
};

exports.fetchProducts = async (req, res) => {
  const products = await Product.find({}, (err) => {
    if (err) {
      return res
        .status(400)
        .json({ error: "Your request could not be processed." });
    }
  });
  res.send(products);
};

exports.fetchProdById = async (req, res) => {
  const query = { _id: req.params.id };
  const product = await Product.find(query)
    .populate({
      path: "productSizes",
      match: { quantity: { $gte: 1 } },
    })
    .exec();
  res.send(product[0]);
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
