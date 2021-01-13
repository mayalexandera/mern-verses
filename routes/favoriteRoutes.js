const { addFavorite } = require('../controllers/favorites_controller')

module.exports = (app) => {
  app.post('/api/users/:id/favorites', addFavorite);
};
