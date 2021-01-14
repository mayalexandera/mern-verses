import { ADD_FAVORITE } from "../actions/types";
import { updateObject } from "../utils/updateObject";

export default function (state = null, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return action.payload || false
    default:
      return state;
  }
}
