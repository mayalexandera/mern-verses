const { placeOrder, fetchOrders } = require('../controllers/orders_controller')

module.exports = (app) => {

  app.post('/api/order/add', placeOrder)

  app.get('/api/orders', fetchOrders )

}