const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey); 

module.exports = (app) => {

  //route handler for stripe post request, first arg is path URI, second is anon function that expects two args - req and res.
  app.post("/api/stripe", (req, res) => {
    stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$89/month',
      source: req.body.id,

    })
  });
};
