import axios from "axios";
import {
  ADD_FAVORITE,
  ADD_FAVORITE_FAILED,
  FETCH_FAVORITES,
  DELETE_FAVORITE
} from "./types";

export const addFavorite = (product) => async (dispatch, getState) => {
  const user = getState().auth.user;
  if (user) {
    const res = await axios.post(`/api/favorites/${user._id}/add`, { product });
    dispatch({ type: ADD_FAVORITE, payload: res.data });
  } else {
    dispatch({
      type: ADD_FAVORITE_FAILED,
      payload: "Must be a member to save wishlists.",
    });
  }
};
export const deleteFavorite = (favorite_id) => async (dispatch, getState) => {
  const user = getState().auth.user._id;

  const res = await axios.delete(`/api/favorites/${user}/${favorite_id}/delete`);

  dispatch({ type: DELETE_FAVORITE, payload: res.data });
};

export const fetchFavorites = () => async (dispatch, getState) => {
  const loggedIn = getState().auth.isLoggedIn;

  if (loggedIn) {
    const res = await axios.get(`/api/favorites`);

    dispatch({ type: FETCH_FAVORITES, payload: res.data });
  }
};
