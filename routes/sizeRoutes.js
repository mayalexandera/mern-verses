const mongoose = require("mongoose");
const Sizes = mongoose.model("Size");

module.exports = (app) => {
  app.get("/api/sizes", async (req, res) => {
    const sizes = await Sizes.find({product: req.query.product});
    res.send(sizes);
  });

    app.get("/api/sizes", async (req, res) => {
    const products = await Sizes.find({ _id: { $in: req.user.favorites }});
    console.log(products)
  });

};
