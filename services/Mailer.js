const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

// creating a class/custom component that extends the mail object from the sendgrid api.
class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    //returns object we can use to interact with sendgrid API.
    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email("maya.alexandera@gmail.com");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    //initial formatting
    this.recipients = this.formatAddresses(recipients);

    //built in function from helper.Mail
    this.addContent(this.body);
    this.addClickTracking();
    //take recipients list and register it with actual email
    this.addRecipients();
  }

  //helper function to properly format addresses using sendgrid's helper API Email function.
  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }

  //helper function to add click tracking to new Mailer class.
  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    // setClickTracking and addTrackingSettings are functions provided by SendGrid
    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    // define variable 'personalize' set to a Personalization object.
    const personalize = new helper.Personalization();

    //iterate over list of recipients defined in constructor, and for each
    //recipient helper.Email object and add them to the personalize object.
    this.recipients.forEach((recipient) => {
      personalize.addTo(recipient);
    });

    //addPersonalization() defined by Mail base class, passing in the personalize
    // object.
    this.addPersonalization(personalize);
  }

  async send() {
    const request = this.sgApi.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      body: this.toJSON(),
    });
    //sends off to send grid
    const response = await this.sgApi.API(request);
    return response;
  }
}

module.exports = Mailer;
