const {Path} = require('path-parser')
const _ = require('lodash')
const { URL } = require('url')
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");
const Survey = mongoose.model("surveys");

// must list middlewares in the order they should be called.
// require User to be logged in before requiring credits.

module.exports = (app) => {

  app.post('/api/surveys/webhooks', (req, res) => {
    const events = _.map(req.body, event => {
      console.log(event)
      const pathname = new URL(event.url).pathname
      const p = new Path('/api/surveys/:surveyId/:surveyChoice')
      console.log(p.test(pathname))
    // res.send({})
  })
})
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks for voting!')
  }) 
  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
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

    /*send email
    the method signature: first argument is survey object, second is the html
    that will be the body of the email.
    */
    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
