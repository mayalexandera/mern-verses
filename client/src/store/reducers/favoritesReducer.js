import {
  ADD_FAVORITE,
  ADD_FAVORITE_FAILED,
  DELETE_FAVORITE,
  FETCH_FAVORITES,
  FETCH_USER
} from "../actions/types";
import { updateObject } from "../../utils/updateObject";
const initialState = { items: [], error: null, message: null };

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return action.payload.message
        ? updateObject(state, { message: action.payload.message })
        : action.payload;
    case FETCH_FAVORITES:
      return action.payload
    case FETCH_USER:
      return action.payload.favorites 
    case DELETE_FAVORITE:
      return updateObject(state, { items: action.payload.items });
    case ADD_FAVORITE_FAILED:
      return updateObject(state, { message: action.payload });
    default:
      return state;
  }
};

export default favoritesReducer;
