import axios from "axios";
import { FETCH_USER, ADD_FAVORITE, FETCH_FAVORITES, DELETE_FAVORITE, ADD_FAVORITE_FAILED } from "./types";

export const addFavorite = (
  productId,
  name,
  brandName,
  price,
  featuredImage
) => async (dispatch, getState) => {
  const favorites = getState().favoriteList.items
  const existing = favorites.map(item => item.productId === productId)
  console.log(existing)
  const res = await axios.post(`/api/favoritelists`, {
    params: {
      productId,
      name,
      brandName,
      price,
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