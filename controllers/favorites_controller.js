const mongoose = require("mongoose");
const FavoriteList = require('../models/Favorite')

exports.addFavorite = async (req, res) => {
  let faveList
  faveList = await FavoriteList.find({ user: req.user._id })
    if (!faveList){ 
      faveList = new FavoriteList({ user: req.user._id })
    }

    const newFavorite = {
      productId: req.body.params.productId,
      sizeId: req.body.params.sizeId,
      name: req.body.params.name,
      brandName: req.body.params.brandName,
      price: req.body.params.price,
      count: req.body.params.count,
      size: req.body.params.size,
      featuredImage: req.body.params.featuredImage
    }

    faveList.items.push(newFavorite)
    faveList.save()
    res.send(faveList)

};