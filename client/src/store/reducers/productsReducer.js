import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  FETCH_PROD_BY_CAT,
  FETCH_PROD_BY_CAT_FAILED,
  FETCH_CATEGORIES,
  FETCH_PROD_BY_FILTER,
  UPDATE_FILTERS,
  SORT_BY_FILTER,
} from "../actions/types";
import { updateObject } from "../../utils/updateObject";

const initialState = {
  products: null,
  message: null,
  filters: [],
  product: null,
  byCategory: null,
  category: null,
  categories: null,
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return (
        updateObject(state, { products: action.payload, message: null }) ||
        false
      );

    case FETCH_PRODUCT:
      return (
        updateObject(state, { product: action.payload, message: null }) || false
      );

    case FETCH_PROD_BY_CAT:
      return (
        updateObject(state, { byCategory: action.payload, message: null }) ||
        false
      );

    case FETCH_PROD_BY_CAT_FAILED:
    return (
      updateObject(state, { byCategory: [], message: action.payload })
    )

    case FETCH_CATEGORIES:
      return updateObject(state, { categories: action.payload, message: null });

    case SORT_BY_FILTER:
      let products = [];

      action.payload.map((item) =>
        products.push(JSON.parse(JSON.stringify(item)))
      );
      return updateObject(state, { products: products });

    case FETCH_PROD_BY_FILTER:
      let updated = [];

      if (action.payload.length === 0) {
        return updateObject(state, { message: "No products found." });
      }

      if (state.products.length === 0) {
        return updateObject(state, { products: action.payload, message: null });
      } else {
        action.payload.map((item) => {
          updated.push(JSON.parse(JSON.stringify(item)));
        });

        state.filters.forEach((filter) => {
          state.products.forEach((product) => {
            if (
              !updated.includes(product) &&
              product[filter.name] === filter.value
            )
              updated.push(JSON.parse(JSON.stringify(product)));
          });
        });

        return updateObject(state, { products: updated, message: null });
      }

    case UPDATE_FILTERS:
      let updatedFilters = [action.payload];

      if (!state.filters) {

        return updateObject(state, { filters: updatedFilters });
      } else {
        console.log(state.filters)
        state.filters.forEach((filter) =>{
        console.log(filter)
          updatedFilters.push(JSON.parse(JSON.stringify(filter)))
        });
        console.log(updatedFilters)
        return updateObject(state, { filters: updatedFilters });
      }
    default:
      return state;
  }
};

export default productsReducer;
