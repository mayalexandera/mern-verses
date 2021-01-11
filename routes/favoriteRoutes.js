const mongoose = require("mongoose");
const FavoriteSchema = require("../models/Favorite");
const Favorite = mongoose.model("Favorite", FavoriteSchema);

module.exports = (app) => {
  app.post(`/api/users/:id/favorites`, async (req, res) => {
    const newFavorite = new Favorite({
      product: req.body.params.product,
      size: req.body.params.size,
    });

    req.user.favorites.push(newFavorite);
    req.user
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
  });
};
