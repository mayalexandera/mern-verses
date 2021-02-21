const { placeOrder, fetchOrder, fetchCurrentUserOrders } = require('../controllers/orders_controller')

module.exports = (app) => {

  app.post('/api/orders/:userId/add', placeOrder)

  app.get('/api/orders/:userId', fetchCurrentUserOrders)

  app.get("/api/orders/:userId/:orderId", fetchOrder)

}