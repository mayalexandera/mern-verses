import {
  ADD_CART_ITEM,
  FETCH_CART,
  DELETE_CART_ITEM,
  UPDATE_CART_ITEM,
  HANDLE_CART_TOTAL,
} from "../actions/types";
import { updateObject } from "../../utils/updateObject";

const initialState = {
  items: [],
  totals: {
    subTotal: 0,
    estShipping: 0,
    estTax: 0,
    total: 0,
  },
  isLoaded: null,
  message: null,
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return action.payload || false;
    case FETCH_CART:
      return (
        updateObject(state, {
          items: action.payload.items,
          _id: action.payload._id,
        }) || false
      );
    case HANDLE_CART_TOTAL:
      console.log(action.payload)
      return updateObject(state, { totals: { subTotal: action.payload.subTotal, estTax: action.payload.estTax, estShipping: action.payload.estShipping, total: action.payload.total } });
    case DELETE_CART_ITEM:
      return action.payload || false;
    case UPDATE_CART_ITEM:
      const newList = [];
      action.payload.items.map((item) => {
        newList.push(JSON.parse(JSON.stringify(item)));
      });
      return updateObject(state, { items: [...newList] });

    default:
      return state;
  }
}

export default cartReducer;