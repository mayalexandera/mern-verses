import axios from "axios";
import {
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_PROD_BY_CAT,
  FETCH_CATEGORIES,
  FETCH_PROD_BY_FILTER,
  UPDATE_FILTERS,
} from "./types";

export const fetchProducts = () => async (dispatch) => {
  const res = await axios.get("/api/products");

  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};

export const fetchProduct = (productId) => async (dispatch) => {
  const res = await axios.get(`/api/products/${productId}`);

  dispatch({ type: FETCH_PRODUCT, payload: res.data });
};

export const fetchProdByCat = (cat) => async (dispatch) => {
  const res = await axios.get(`/api/products/list/${cat}`);

  dispatch({ type: FETCH_PROD_BY_CAT, payload: res.data });
};

export const fetchProdByFilter = (filter) => async (dispatch, getState) => {
  console.log(filter)
  await dispatch({ type: UPDATE_FILTERS, payload: filter });
  const filters = getState().products.filters;
  const res = await axios.get(`/api/products/${filter.type}/${filter.value}`, {
    params: { filters },
  });

  dispatch({ type: FETCH_PROD_BY_FILTER, payload: res.data });
};

export const fetchCategories = () => async (dispatch) => {
  const res = await axios.get("/api/categories");

  dispatch({ type: FETCH_CATEGORIES, payload: res.data });
};