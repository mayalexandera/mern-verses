const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')


// must list middlewares in the order they should be called. 
// require User to be logged in before requiring credits.

module.exports = (app) => {
  app.post('/api/surveys'), requireLogin, requireCredits, (req, res) => {
    //expecting request body to contain title, body, subject, and recipients string
    const { title, subject, body, recipients } = req.body
    
  }
}