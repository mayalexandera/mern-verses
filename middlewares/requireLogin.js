
// next is a function that is called when middleware is finished running.
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'you must login' })
  }

  next();
}