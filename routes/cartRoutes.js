const { addToCart, addFavoriteToCart } = require('../controllers/carts_controller')

module.exports = (app) => {

  app.post("/api/carts", addToCart)

}

