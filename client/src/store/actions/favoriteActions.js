import axios from "axios";
import { FETCH_USER, ADD_FAVORITE, FETCH_FAVORITES, DELETE_FAVORITE, ADD_FAVORITE_FAILED, FETCH_FAVORITES_FAILED } from "./types";

export const addFavorite = (product) => async (dispatch, getState ) => {
  const existingList = getState().favoriteList
  let existingItem 
  if(!!existingList) existingItem = existingList.items.filter((item) => item.productId === product.id)

  if(existingItem[0] !== undefined ) {
    const res = await axios.post(`/api/favoritelists`, { product });
    dispatch({ type: ADD_FAVORITE, payload: res.data });
  } else {
    const message = "Item is already in your favorites.";
    dispatch(favoriteExistsResponse(message))
  }  
};

export const deleteFavorite = (favorite_id) => async (dispatch, getState) => {
  const user = getState().auth.user._id
  const res = await axios.delete(`/api/favoritelists/${user}/${favorite_id}` );
  dispatch({ type: DELETE_FAVORITE, payload: res.data });
};

export const fetchFavorites = () => async (dispatch, getState) => {
  if (getState().auth.isLoggedIn) {
  const user = getState().auth.user._id
    const res = await axios.get(`/api/favoritelists/${user}`);
    console.log(res.data)
    dispatch({ type: FETCH_FAVORITES, payload: res.data });
  }
};

export const favoriteExistsResponse =  (message) => {
  return (dispatch) => {
    dispatch({ type: ADD_FAVORITE_FAILED, payload: message})
  }
}