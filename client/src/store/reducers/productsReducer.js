import { FETCH_PRODUCTS, FETCH_PRODUCT, FETCH_PROD_BY_CAT, FETCH_CATEGORIES, FETCH_PROD_BY_FILTER } from "../actions/types";
import { updateObject } from "../../utils/updateObject";

const initialState = {
  products: null,
  product: null,
  byCategory: null,
  categories: null
}
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return updateObject(state, { products: action.payload }) || false;
    case FETCH_PRODUCT:
      return updateObject(state, { product: action.payload }) || false
    case FETCH_PROD_BY_CAT: 
    return updateObject(state, { byCategory: action.payload }) || false

    case FETCH_CATEGORIES: 
    return updateObject(state, { categories: action.payload })

    case FETCH_PROD_BY_FILTER:
      console.log(action.payload) 
    return updateObject(state, { products: action.payload }) || false
      default:
      return state;
  }
}
