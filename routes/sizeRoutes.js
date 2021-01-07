const mongoose = require("mongoose");
const Sizes = mongoose.model("sizes");

module.exports = (app) => {
  app.get("/api/sizes", async (req, res) => {
    const sizes = await Sizes.find({product: req.query.product});
    res.send(sizes);
  });
};
