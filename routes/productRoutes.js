const {
  fetchProducts,
  fetchProdByCat,
  fetchProdById,
} = require("../controllers/products_controller");

module.exports = (app) => {
  app.get("/api/products", fetchProducts);

  app.get("/api/products/:id", fetchProdById);

  app.get(`/api/product/list/:category`, fetchProdByCat);
};
