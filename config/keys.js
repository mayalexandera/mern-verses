// logic to determine environment (dev || prod)

if (process.env.NODE_ENV === 'production') {
  //we are in prod environment - return prod set of keys
  module.exports = require('./prod')
} else {
  // we are in dev environment - return dev keys
  module.exports = require('./dev')
}