const { addToCart } = require('../controllers/carts_controller')

module.exports = (app) => {

  app.post("/api/users/:id/cart", addToCart)

}

