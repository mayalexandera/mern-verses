import { ADD_FAVORITE, FETCH_FAVORITES } from "../actions/types";
import { updateObject } from "../utils/updateObject";

const initialState = {
  favorites: []
};
export default function (state = initialState, action) {
  // console.log(action.payload || false)
  switch (action.type) {
    case ADD_FAVORITE:
      // either an object or a string - empty strings are falsey
      return updateObject(state, { favorites: action.payload }) || false;
    case FETCH_FAVORITES:
      return updateObject(state, { favorites: action.payload })
    default:
      return state;
  }
}
