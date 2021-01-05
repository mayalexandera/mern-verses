const { Path } = require("path-parser");
const _ = require("lodash");
const { URL } = require("url");
const mongoose = require("mongoose");
const Plans = mongoose.model("plans");


module.exports = (app) => {
  app.get('/api/plans', async (req, res) => {
    const plans = await Plans.find({})
    // console.log(plans)
    res.send(plans)
    // console.log(req.body, res)
  })
}