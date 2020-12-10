const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin')

module.exports = (app) => {
  /*
  route handler for stripe post request, first arg is path URI,
  second is login middleware, third is anon function that
  expects two args - req and res.
  */
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$89/month",
      source: req.body.id,
    });
    
  /*
     
    req.user gets assigned by passport.  whenever there is a request comes in
    set up with passport.initialize() & passport.session()

    passport looks at the cookie, and if there is assigns the user model to the 
    request.
  */

    req.user.credits +=5;
    const user = await req.user.save()

    res.send(user)
    console.log(user)
  });
};
