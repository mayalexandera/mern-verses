import axios from "axios";
import { FETCH_USER, ADD_FAVORITE, FETCH_FAVORITES, DELETE_FAVORITE, ADD_FAVORITE_FAILED, FETCH_FAVORITES_FAILED } from "./types";

export const addFavorite = (product) => async (dispatch, getState ) => {
  const existingList = getState().favoriteList
  const existingItem = !!existingList && !!existingList.items.filter((item) => item.productId === product.id)

  if(existingItem) {
     const message = "Item is already in your favorites.";
    dispatch(favoriteExistsResponse(message))
  } else {
    const res = await axios.post(`/api/favoritelists`, { product });
    dispatch({ type: ADD_FAVORITE, payload: res.data });
  }  
};

export const deleteFavorite = (favorite_id) => async (dispatch, getState) => {
  const user = getState().auth._id
  const res = await axios.delete(`/api/favoritelists/${user}/${favorite_id}` );
  dispatch({ type: DELETE_FAVORITE, payload: res.data });
};

export const fetchFavorites = () => async (dispatch, getState) => {
  const user = getState().auth.userId
  if (user) {
    const res = await axios.get(`/api/favoritelists/${user}`);
    dispatch({ type: FETCH_FAVORITES, payload: res.data });
  }
};

export const favoriteExistsResponse =  (message) => {
  return (dispatch) => {
    dispatch({ type: ADD_FAVORITE_FAILED, payload: message})
  }
}