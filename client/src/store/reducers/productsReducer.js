import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  FETCH_PROD_BY_CAT,
  FETCH_CATEGORIES,
  FETCH_PROD_BY_FILTER,
  UPDATE_FILTERS,
} from "../actions/types";
import { updateObject } from "../../utils/updateObject";
import { update } from "lodash";

const initialState = {
  products: null,
  filters: [],
  product: null,
  filters: null,
  byCategory: null,
  categories: null,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return updateObject(state, { products: action.payload }) || false;

    case FETCH_PRODUCT:
      return updateObject(state, { product: action.payload }) || false;

    case FETCH_PROD_BY_CAT:
      return updateObject(state, { byCategory: action.payload }) || false;

    case FETCH_CATEGORIES:
      return updateObject(state, { categories: action.payload });

    case FETCH_PROD_BY_FILTER:
      let updated = [action.payload];
      if (!state.products) {
        return updateObject(state, { products: action.payload });
      } else {
        state.filters.map((filter) => {
          state.products.map((product) => {
            if (
              !updated.includes(product) &&
              product[filter.name] === filter.value
            )
              updated.push(JSON.parse(JSON.stringify(product)));
          });
        });
      }
      return updateObject(state, { products: action.payload }) || false;

    case UPDATE_FILTERS:
      let updatedFilters = [action.payload];
      if (!state.filters) {
        return updateObject(state, { filters: updatedFilters });
      } else {
        state.filters.map((filter) =>
          updatedFilters.push(JSON.parse(JSON.stringify(filter)))
        );
        return updateObject(state, { filters: updatedFilters });
      }
    default:
      return state;
  }
}
