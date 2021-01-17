import axios from "axios";
import { FETCH_PRODUCT, FETCH_PRODUCTS, FETCH_PROD_BY_CAT, FETCH_CATEGORIES } from "./types";

export const fetchProducts = () => async (dispatch) => {
  const res = await axios.get("/api/products");

  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};

export const fetchProduct = (productId) => async (dispatch) => {
  const res = await axios.get(`/api/products/${productId}`);

  dispatch({ type: FETCH_PRODUCT, payload: res.data });
};

export const fetchProdByCat = (cat) => async (dispatch) => {
  const res = await axios.get(`/api/products/list/${cat}`)
  console.log(res)
  dispatch({ type: FETCH_PROD_BY_CAT, payload: res.data })
}

export const fetchCategories = () => async (dispatch) => {
  const res = await axios.get('/api/categories')

  dispatch({ type: FETCH_CATEGORIES, payload: res.data })
}