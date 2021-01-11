const mongoose = require('mongoose')

module.exports = (app) => {
  app.post(`/api/users/:id/favorites`, async (req, res) => {
    const favorite = new Favorite({
      product: req.body.params.product,
      size: req.body.params.size
    })
    const user = req.user
    user.favorites.push(favorite)
    await user.save()
    res.send(user.favorites)
  })

  app.get('/api/users/:id/favorites', async (req, res) => {
    res.send(req.user.favorites)
  })
}
