import { ADD_FAVORITE, DELETE_FAVORITE, FETCH_FAVORITES } from "../actions/types";
import { updateObject } from "../../utils/updateObject";
const initialState = 
{items: []}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return action.payload || false;
    case FETCH_FAVORITES:
      return action.payload || false;
    case DELETE_FAVORITE:
      return updateObject(state, { items: action.payload.items })
    default:
      return state;
  }
}
