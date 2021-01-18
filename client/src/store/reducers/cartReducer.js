import { ADD_CART_ITEM, FETCH_CART, DELETE_CART_ITEM, UPDATE_CART_ITEM } from "../actions/types";
import { updateObject } from "../../utils/updateObject";

const initialState = {
  items: null,
  totals: null,
  message: null
}
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CART_ITEM:
      return action.payload || false;
    case FETCH_CART:
      return action.payload || false;
    case DELETE_CART_ITEM:
      return action.payload || false
    case UPDATE_CART_ITEM:
      const newList = []
      action.payload.items.map(item => {
        newList.push(JSON.parse(JSON.stringify(item)))
      })
      return updateObject(state, { items: [...newList]})

    default:
      return state;
  }
}
