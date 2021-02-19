const {
  addFavorite,
  deleteFavorite,
  fetchFavorites,
} = require("../controllers/favorites_controller");

module.exports = (app) => {
  app.post("/api/favorites/:id/add", addFavorite);
  app.get("/api/favorites", fetchFavorites);
  app.delete("/api/favorites/:id/:favorite_id/delete", deleteFavorite);
};
