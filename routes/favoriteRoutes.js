const {
  addFavorite,
  deleteFavorite,
} = require("../controllers/favorites_controller");

module.exports = (app) => {
  app.post("/api/favorites", addFavorite);
};
