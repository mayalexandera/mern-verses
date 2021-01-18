const { addToCart, addFavoriteToCart, deleteCartItem, fetchCart, updateCartItem } = require('../controllers/carts_controller')

module.exports = (app) => {

  app.post("/api/carts", addToCart)
  app.get("/api/carts", fetchCart)
  app.delete("/api/carts/:id/:cartItemId", deleteCartItem)
  app.put("/api/carts/:id/:cartItemId", updateCartItem)

}

  