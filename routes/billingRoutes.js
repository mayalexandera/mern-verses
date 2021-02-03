const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const mongoose = require('mongoose')
const Membership = mongoose.model("Membership")
const User = mongoose.model("User")
const requireLogin = require('../middlewares/requireLogin')

module.exports = (app) => {
  /*
  route handler for stripe post request, first arg is path URI,
  second is login middleware, third is anon function that
  expects two args - req and res.
  */
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: Number(req.query.amt),
      currency: "usd",
      description: `${req.query.amt}/per month`,
      source: req.body.id,
    });

  /*
    req.user gets assigned by passport.  whenever there is a request that 
    comes in set up with passport.initialize() & passport.session()

    passport looks at the cookie, and if there is assigns the user model to the 
    request.
  */
 console.log(req.query)
    const membership = new Membership({
      user: req.user._id,
      credits: Number(req.query.credits),
      items: Number(req.query.items)

    })
    req.user.membership = membership;
   await req.user.save()
   const user = await User.findById(req.user._id).populate({ path: "membership"})

    res.send(user)
  });
};


