import { FETCH_PRODUCTS } from "../actions/types";

export default function (state = [], action) {
  // console.log(action.payload || false)
  switch (action.type) {
    case FETCH_PRODUCTS:
      // either an object or a string - empty strings are falsey
      return action.payload || false;
    default:
      return state;
  }
}
