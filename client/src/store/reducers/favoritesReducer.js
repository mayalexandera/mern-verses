import { ADD_FAVORITE, DELETE_FAVORITE, FETCH_FAVORITES, ADD_FAVORITE_FAILED } from "../actions/types";
import { updateObject } from "../../utils/updateObject";
const initialState = { items: [], error: null, message: null };

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return action.payload || false;
    case FETCH_FAVORITES:
      return action.payload || false;
    case DELETE_FAVORITE:
      return updateObject(state, { items: action.payload.items });
    case ADD_FAVORITE_FAILED:
      return updateObject(state, { message: action.payload });
    default:
      return state;
  }
}