const sendgrid = require('sendgrid')
const helper = sendgrid.mail
const keys = require('../config/keys')

// creating a class/custom component that extends the mail object from the sendgrid api.
class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    
    super()
    this.from_email = new helper.Email('maya.alexandera@gmail.com')
    this.subject = subject
    this.body = new helper.Content('text/html', content)
    this.recipients = this.formatAddresses(recipients)
  }

  formatAddresses(recipients) {
    
  }
}

module.exports = Mailer;