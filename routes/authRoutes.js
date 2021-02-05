const passport = require("passport");
const mongoose = require("mongoose");
const { runInNewContext } = require("vm");
const User = mongoose.model("User");
// object contains all route handlers.
module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  /* after user comes back from o auth flow,
  passport middleware does its thing,
  arrow function redirects to '/surveys'
  */
  app.get(
    "/auth/google/callback",

    // o auth middleware (google/passport)
    passport.authenticate("google", { failureRedirect: "/" }),

    //this is express arrow function - express provides arguments req & res
    (req, res) => {
      // console.log(res)
      // const user = req.user
      res.redirect("/");
      // res.send()
    }
  );

  app.get("/api/current_user", async (req, res) => {
    if (!req.user) {
      return res.status(400).send({ error: "No User Found" });
    }

    if (!req.user) {
      return res.status(400).send({ error: "No User Found" });
    }

    const user = await User.findById(req.user._id).populate({
      path: "membership",
    });
    res.send(user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
