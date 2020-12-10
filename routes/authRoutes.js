const passport = require("passport");

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
      res.redirect("/");
    }
  );
  
  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  })

  app.get('/api/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })

};  

 