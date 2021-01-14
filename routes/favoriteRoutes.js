const {
  addFavorite,
  deleteFavorite,
  fetchFavorites
} = require("../controllers/favorites_controller");

module.exports = (app) => {
  app.post("/api/favoritelists", addFavorite);

  app.get("/api/favoritelists", fetchFavorites);
};
