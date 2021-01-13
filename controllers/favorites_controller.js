const mongoose = require("mongoose");
const FavoriteSchema = require("../models/Favorite");
const Favorite = mongoose.model("Favorite", FavoriteSchema);

exports.addFavorite = async (req, res) => {
  const favorite = req.user.favorites.filter(
    (item) => item.product.toString() === req.body.params.product.toString()
  );

  if (favorite[0]) {
    return res.send({ message: "item is already in your favorites." });
  } else {
    const newFavorite = new Favorite({
      product: req.body.params.product,
      size: req.body.params.size,
    });
    req.user.favorites.push(newFavorite);
  }
  await req.user
    .save()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
    });
};
