import { FETCH_PRODUCTS, FETCH_PRODUCT, FETCH_PROD_BY_CAT } from "../actions/types";
import { updateObject } from "../../utils/updateObject";

const initialState = {
  products: null,
  product: null
}
export default function (state = initialState, action) {
  // console.log(action.payload || false)
  switch (action.type) {
    case FETCH_PRODUCTS:
      // either an object or a string - empty strings are falsey
      return updateObject(state, { products: action.payload }) || false;
    case FETCH_PRODUCT:
      return updateObject(state, { product: action.payload }) || false
    case FETCH_PROD_BY_CAT: 
    return updateObject(state, { products: action.payload }) || false
      default:
      return state;
  }
}
