const { addToCart, addFavoriteToCart, fetchCart } = require('../controllers/carts_controller')

module.exports = (app) => {

  app.post("/api/carts", addToCart)
  app.get("/api/carts", fetchCart)

}

  