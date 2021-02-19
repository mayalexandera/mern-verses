import {
  ADD_CART_ITEM,
  FETCH_CART,
  DELETE_CART_ITEM,
  UPDATE_CART_ITEM,
  ADD_CART_ITEM_FAILED,
  HANDLE_CART_TOTAL,
  FETCH_USER,
} from "../actions/types";
import { updateObject } from "../../utils/updateObject";

const initialState = {
  items: [],
  itemCount: 0,
  totals: {
    subTotal: 0,
    estShipping: 0,
    estTax: 0,
    total: 0,
  },
  errorMessage: null,
};

const cartReducer = (state = initialState, action) => {
  let updatedCart = [];
  switch (action.type) {
    case ADD_CART_ITEM:

      action.payload.items.forEach((item) => {
        updatedCart.push(JSON.parse(JSON.stringify(item)));
      });

    return updateObject(state, { items: updatedCart });

    case ADD_CART_ITEM_FAILED:
    return updateObject(state, {
      errorMessage: action.payload
    });

    case FETCH_USER:
    return updateObject(state, {
      items: action.payload.cart.items,
       _id: action.payload.cart._id,
    });

    case FETCH_CART:
    return updateObject(state, {
      items: action.payload.items,
      _id: action.payload._id,
    });

    case HANDLE_CART_TOTAL:
    return updateObject(state, {
      totals: action.payload
    });

    case DELETE_CART_ITEM:
    return action.payload || false;

    case UPDATE_CART_ITEM:
      action.payload.items.forEach((item) => {
        updatedCart.push(JSON.parse(JSON.stringify(item)));
      });
    return updateObject(state, {
      items: updatedCart
    });

    default:
    return state;
  }
};

export default cartReducer;
