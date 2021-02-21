const {
  fetchProducts,
  fetchProdByCat,
  fetchProdById,
  fetchAccessories,
  fetchCategories,
  fetchProdByFilter
} = require("../controllers/products_controller");

module.exports = (app) => {
  app.get("/api/products", fetchProducts);

  app.get("/api/products/:id", fetchProdById);

  app.get(`/api/products/:categoryId/list`, fetchProdByCat);

  app.get(`/api/products/:type/:value`, fetchProdByFilter);
  
  app.get(`/api/categories`, fetchCategories);

  app.get("/api/accessories", fetchAccessories)
};
