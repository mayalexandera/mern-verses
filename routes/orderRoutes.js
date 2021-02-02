const { placeOrder } = require('../controllers/orders_controller')

module.exports = (app) => {

  app.post('/api/order/add', placeOrder)

}