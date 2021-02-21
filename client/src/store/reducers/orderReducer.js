import { PLACE_ORDER, FETCH_ORDER, FETCH_CURRENT_USER_ORDERS, FETCH_ORDERS_FAILED } from "../actions/types";
import { updateObject } from "../../utils/updateObject";

const initialState = {
  orders: [],
  order: {},
  message: null
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER:
      console.log(action.payload);
    return updateObject(state, { order: action.payload, message: null });
    case FETCH_ORDER:
      return updateObject(state, { order: action.payload })
    case FETCH_CURRENT_USER_ORDERS:
    return updateObject(state, { orders: action.payload, message: null });

    case FETCH_ORDERS_FAILED: 
    return updateObject(state, { orders: [], message: action.payload })
    default:
    return state;
  }
};

export default orderReducer;
