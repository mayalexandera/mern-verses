const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");
const Survey = mongoose.model("surveys");

// must list middlewares in the order they should be called.
// require User to be logged in before requiring credits.

module.exports = (app) => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    //expecting request body to contain title, body, subject, and recipients string
    const { title, subject, body, recipients } = req.body;

    // create survey model instance
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients
        .split(",")
        .map((email) => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    //send email
    //the method signature: first argument is survey object, second is the html
    // that will be the body of the email.
    const mailer = new Mailer(survey, surveyTemplate(survey));
    mailer.send();
  });
};
