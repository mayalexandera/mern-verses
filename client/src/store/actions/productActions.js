import axios from "axios";
import { FETCH_PRODUCT, FETCH_PRODUCTS } from "./types";

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
