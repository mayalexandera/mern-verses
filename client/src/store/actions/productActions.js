import axios from "axios";
import { FETCH_PRODUCT, FETCH_PRODUCTS, FETCH_PROD_BY_CAT } from "./types";

export const fetchProducts = () => async (dispatch) => {
  const res = await axios.get("/api/products");

  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};

export const fetchProduct = (productId) => async (dispatch) => {
  const res = await axios.get("/api/products/:id", {
    params: { productId },
  });

  dispatch({ type: FETCH_PRODUCT, payload: res.data });
};

export const fetchProdByCat = (category) => async (dispatch) => {
  console.log(category)
  const res = await axios.get(`/api/product/list/${category}`, {
    params: { category }
  })

  dispatch({ type: FETCH_PROD_BY_CAT, payload: res.data })
}