const mongoose = require("mongoose");
const FavoriteList = require("../models/Favorite");

exports.fetchFavorites = async (req, res) => {
  const list = await FavoriteList.findById(req.user._id);
  res.send(list);
};

exports.addFavorite = async (req, res) => {
  let faveList;
  const newFavorite = {
    productId: req.body.params.productId,
    name: req.body.params.name,
    brandName: req.body.params.brandName,
    price: req.body.params.price,
    featuredImage: req.body.params.featuredImage,
  };

  faveList = await FavoriteList.findById(req.user._id);
  if (faveList) {
    faveList.items.push(newFavorite);
    await faveList.save();
    res.send(faveList);
  } else {
    faveList = new FavoriteList({ _id: req.user._id, items: [newFavorite] });
    await faveList.save()
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
