const mongoose = require("mongoose");
const FavoriteList = require("../models/Favorite");


exports.fetchFavorites = async (req, res) => {
  const list = await FavoriteList.findById(req.user._id)
  res.send(list)
}

exports.addFavorite = async (req, res) => {
  let faveList;
  const newFavorite = {
    productId: req.body.params.productId,
    sizeId: req.body.params.sizeId,
    name: req.body.params.name,
    brandName: req.body.params.brandName,
    price: req.body.params.price,
    size: req.body.params.size,
    featuredImage: req.body.params.featuredImage,
  };
  
  faveList = await FavoriteList.findById(req.user._id);
  if (faveList) {
    faveList.items.push(newFavorite);
    faveList.save();
    res.send(faveList);
  } else {
    faveList = new FavoriteList({ _id: req.user._id, items: [newFavorite] });
    res.send(faveList);
  }
};
