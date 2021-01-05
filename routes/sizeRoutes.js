const mongoose = require("mongoose");
const Sizes = mongoose.model("sizes");

module.exports = (app) => {
  app.get("/api/sizes", async (req, res) => {
    console.log(req.query)
    const sizes = await Sizes.find({product: req.query.product});
    console.log(sizes);
    res.send(sizes);
  });
};
