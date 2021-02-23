//Bring in models
const Product = require("../models/Product");
const Category = require("../models/Category");
const Size = require("../models/Size");

exports.fetchProdByCat = async (req, res) => {
  const categoryId = req.params.categoryId;

  try {
    // const categoryProducts = await Product.find({category: req.params.categoryId})
    // const category = await Category.findById(categoryId)
    //   category.products = categoryProducts
    //   await category.save()
      const categoryDoc = await Category.findById(categoryId).populate("products")
      res.send(categoryDoc);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.fetchCategories = async (req, res) => {
  try {
    const categories = await Category.find({})
    res.send(categories);

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.fetchProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    if (products.length >= 0) {
      res.send(products);
    }
    
    else {
     res.send({ status: 404, message: "0 products found." });;
    }
    
  } catch (error) {

    res.status(404).json({ message: error.message });

  }

};

exports.fetchProdById = async (req, res) => {

  try {
    const query = { _id: req.params.id };
    const response = await Product.findOne(query)
      .populate({
        path: "productSizes"
      })

    res.send(response);

  } catch (error) {
    res.status(404).json({ message: message.error });
  }
};

exports.fetchProdByFilter = async (req, res) => {
  let query;

  const type = req.params.type;
  const val = req.params.value;

  try {
    if (type === "expression" || type === "occasion") {
      query = { tags: { $in: val } };
    }

    if (type === "price") {
      const prices = val.split("-");
      const [minPrice, maxPrice] = [Number(prices[0]), Number(prices[1])];

      query = {
        price: { $gte: minPrice, $lte: maxPrice },
      };
    } 
    
    else if (type === "brandName") {
       query = { [kind]: val };
    }

    const products = await Product.find(query);
    if (products.length >= 0) {
      res.send(products);
    } else {
     res.send({ status: 404, message: "0 products found." });
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.fetchAccessories = async (req, res) => {

  try {
    const cat = await Category.findOne({ name: "Accessories" });
    const accessories = await Product.find({ category: cat._id });

    cat.products = accessories;

    await cat.save();

    if (cat.products.length >= 0) {
      res.send(cat);
    } else {
     res.send({ status: 404, message: "0 products found." });
    }

  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};
