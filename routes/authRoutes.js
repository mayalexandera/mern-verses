const passport = require("passport");
const mongoose = require("mongoose");
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
    passport.authenticate("google"),

    //this is express arrow function - express provides arguments req & res
    (req, res) => {
      // console.log(res)
      res.redirect("/");
    }
  );

  app.get("/api/current_user", async (req, res) => {
    // console.log('current-user',req)
    const user = await User.findById(req.user._id).populate({ path: "membership" })
    res.send(user);
    
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
