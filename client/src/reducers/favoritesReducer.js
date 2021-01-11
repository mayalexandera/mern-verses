import { FETCH_FAVORITE_PRODUCTS } from "../actions/types";
import { updateObject } from "../utils/updateObject";

const initialState = {
  products: []
};
export default function (state = initialState, action) {
  switch (action.type) {
      case FETCH_FAVORITE_PRODUCTS:
        return updateObject(state, { products: action.payload }) || false
    default:
      return state;
  }
}
