import axios from "axios";
import { ADD_FAVORITE, FETCH_FAVORITES, DELETE_FAVORITE } from "./types";

export const addFavorite = (product) => async (dispatch, getState) => {
  const user = getState().auth.user._id;
  const res = await axios.post(`/api/favoritelists/${user}`, { product });

  dispatch({ type: ADD_FAVORITE, payload: res.data });
};

export const deleteFavorite = (favorite_id) => async (dispatch, getState) => {
  const user = getState().auth.user._id;

  const res = await axios.delete(`/api/favoritelists/${user}/${favorite_id}`);

  dispatch({ type: DELETE_FAVORITE, payload: res.data });
};

export const fetchFavorites = () => async (dispatch, getState) => {
  const loggedIn = getState().auth.isLoggedIn;

  if (loggedIn) {
    const res = await axios.get(`/api/favoritelists`);

    dispatch({ type: FETCH_FAVORITES, payload: res.data });
  }
};
