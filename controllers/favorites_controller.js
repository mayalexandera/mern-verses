const mongoose = require("mongoose");
const FavoriteList = require('../models/Favorite')

exports.addFavorite = async (req, res) => {
  let faveList
  const newFavorite = {
    productId: req.body.params.productId,
    sizeId: req.body.params.sizeId,
    name: req.body.params.name,
    brandName: req.body.params.brandName,
    price: req.body.params.price,
    size: req.body.params.size,
    featuredImage: req.body.params.featuredImage,
  };
  faveList = await FavoriteList.find({ _id: req.user._id })
    if (faveList){ 
      faveList[0].items.push(newFavorite)
      faveList[0].save()
      res.send(faveList[0])
    } else {

      faveList = new FavoriteList({ _id: req.user._id, items: [newFavorite]})
      res.send(faveList)
    }
    
    


};