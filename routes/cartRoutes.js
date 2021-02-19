const { addToCart, addFavoriteToCart, deleteCartItem, fetchCart, updateCartItem } = require('../controllers/carts_controller')

module.exports = (app) => {

  app.post("/api/cart/:id/add", addToCart)
  app.get("/api/cart/:id", fetchCart)
  app.delete("/api/cart/:id/:cartItemId/delete", deleteCartItem)
  app.put("/api/cart/:id/:cartItemId/update", updateCartItem)

}

  