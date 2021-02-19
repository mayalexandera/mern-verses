const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const Cart = require("../models/Cart");
const Favorite = require('../models/Favorite')

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.get("/api/current_user", async (req, res) => {
    if (!req.user) {
      return res.status(400).send({ error: "No User Found" });
    }

    const user = await User.findById(req.user._id).populate({
      path: "membership",
    });
    const cart = await Cart.findOneOrCreate({ _id: user._id });
    const favorites = await Favorite.findOneOrCreate({_id: user._id})

    res.send({ user, cart, favorites });
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
