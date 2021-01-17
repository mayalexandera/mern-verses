import axios from "axios";
import { FETCH_USER, ADD_FAVORITE, FETCH_FAVORITES, DELETE_FAVORITE } from "./types";

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

export const deleteFavorite = (favorite_id) => async (dispatch, getState) => {
  const user = getState().auth._id
  const res = await axios.delete(`/api/favoritelists/${user}/${favorite_id}` );
  dispatch({ type: DELETE_FAVORITE, payload: res.data });
};

export const fetchFavorites = () => async (dispatch, getState) => {
  const res = await axios.get(`/api/favoritelists`);

  dispatch({ type: FETCH_FAVORITES, payload: res.data });
};