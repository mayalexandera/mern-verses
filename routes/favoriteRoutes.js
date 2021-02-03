const {
  addFavorite,
  deleteFavorite,
  fetchFavorites
} = require("../controllers/favorites_controller");

module.exports = (app) => {
  app.post("/api/favoritelists/:id", addFavorite);

  app.get("/api/favoritelists", fetchFavorites);
  app.delete("/api/favoritelists/:id/:favorite_id", deleteFavorite);
};
