import { ADD_CART_ITEM, FETCH_CART } from "../actions/types";
import { updateObject } from "../../utils/updateObject";

export default function (state = null, action) {
  switch (action.type) {
    case ADD_CART_ITEM:
      return action.payload || false;
    case FETCH_CART:
      return action.payload || false;
    default:
      return state;
  }
}
