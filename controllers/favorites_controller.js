const mongoose = require("mongoose");
const FavoriteList = require("../models/Favorite");

exports.fetchFavorites = async (req, res) => {
  let list = await FavoriteList.findById(req.user._id);
  if (list) {
    res.send(list);
  } else {
    list = new FavoriteList({ _id: req.user._id });
    await list.save();
    res.send(list);
  }
};

exports.addFavorite = async (req, res) => {
  const { _id, name, brandName, price, images } = req.body.product;
  let faveList;

  const newFavorite = {
    productId: _id,
    name,
    brandName,
    price,
    featuredImage: images.model1[0],
  };

  faveList = await FavoriteList.findById(req.user._id);
  if (faveList) {
    faveList.items.push(newFavorite);
    await faveList.save();
    res.send(faveList);
  } else {
    faveList = new FavoriteList({ _id: req.user._id, items: [newFavorite] });
    await faveList.save();
    res.send(faveList);
  }
};

exports.deleteFavorite = async (req, res) => {
  const list = await FavoriteList.findById(req.user._id, (err) => {
    if (err) {
      console.log(err);
      return res
        .status(400)
        .json({ error: "Your request could not be processed." });
    }
  });
  const items = list.items.filter(
    (item) => item._id.toString() !== req.params.favorite_id.toString()
  );
  list.items = items;
  await list.save();
  res.send(list);
};
