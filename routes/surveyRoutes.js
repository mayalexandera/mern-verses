const { Path } = require("path-parser");
const _ = require("lodash");
const { URL } = require("url");
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");
const Survey = mongoose.model("surveys");

// must list middlewares in the order they should be called.
// require User to be logged in before requiring credits.

module.exports = (app) => {

  app.post("/api/surveys/webhooks", (req, res) => {
    const p = new Path("/api/surveys/:surveyId/:choice");

    _.chain(req.body)
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname);
        if (match) {
          return { email, surveyId: match.surveyId, choice: match.choice };
        }
      })
      .compact()
      .uniqBy("email", "surveyId")
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false },
            },
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.responded": true },
            lastResponded: new Date()
          }
        ).exec()
      })
      .value();

    res.send({});
  });

  app.get("/api/surveys/:surveyId/:choice", (req, res) => {
    res.redirect("/member/surveys/thanks");
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    //expecting request body to contain title, body, subject, and recipients string
    console.log(res)
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
