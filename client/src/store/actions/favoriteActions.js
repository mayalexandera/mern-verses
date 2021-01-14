import axios from "axios";
import { FETCH_USER, ADD_FAVORITE, FETCH_FAVORITES } from "./types";

export const addFavorite = (
  productId,
  sizeId,
  name,
  brandName,
  price,
  size,
  featuredImage
) => async (dispatch) => {
  const res = await axios.post(`/api/favoritelists`, {
    params: {
      productId,
      sizeId,
      name,
      brandName,
      price,
      size,
      featuredImage,
    },
  });
  dispatch({ type: ADD_FAVORITE, payload: res.data });
};

export const deleteFavorite = (_id) => async (dispatch) => {
  const res = await axios.delete(`/api/favoriteslists/${_id}`);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchFavorites = () => async (dispatch, getState) => {
  const res = await axios.get(`/api/favoritelists`);

  dispatch({ type: FETCH_FAVORITES, payload: res.data });
};