const {
  fetchProducts,
  fetchProdByCat,
  fetchProdById,
  fetchCategories,
  fetchProdByFilter
} = require("../controllers/products_controller");

module.exports = (app) => {
  app.get("/api/products", fetchProducts);

  app.get("/api/products/:id", fetchProdById);

  app.get(`/api/products/list/:category`, fetchProdByCat);

  app.get(`/api/products/:type/:value`, fetchProdByFilter);
  
  app.get(`/api/categories`, fetchCategories);
};
