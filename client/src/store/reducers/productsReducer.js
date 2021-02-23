import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  FETCH_PROD_BY_CAT,
  FETCH_PROD_BY_CAT_FAILED,
  FETCH_CATEGORIES,
  FETCH_PROD_BY_FILTER,
  FETCH_ACCESSORIES,
  UPDATE_FILTERS,
  SORT_BY_FILTER,
} from "../actions/types";
import { updateObject } from "../../utils/updateObject";

const initialState = {
  products: [],
  accessories: [],
  filters: [],
  product: {},
  categoryProducts: [],
  categoryName: null,
  categoryId: null,
  message: null,
  categories: [],
};
const productsReducer = (state = initialState, action) => {
  let newMessage;
  switch (action.type) {

    case FETCH_PRODUCTS:

    return updateObject(state, {
      products: action.payload,
      message: null,
    });

    case FETCH_PRODUCT:

    return updateObject(state, {
      product: action.payload,
      message: null,
    });

    case FETCH_ACCESSORIES:
       newMessage = action.payload.products === 0 ? "0 products found" : null;

    return updateObject(state, {
      categoryProducts: action.payload.products,
      categoryName: action.payload.name,
      categoryId: action.payload._id,
      message: newMessage,
    });

    case FETCH_PROD_BY_CAT:
       newMessage = action.payload.products === 0 ? "0 products found" : null;
    return updateObject(state, {
      categoryProducts: action.payload.products,
      categoryName: action.payload.name, 
      categoryId: action.payload._id,
      message: newMessage,
    });

    case FETCH_PROD_BY_CAT_FAILED:
    return updateObject(state, {
      categoryProducts: [],
      message: action.payload.message,
    });

    case FETCH_CATEGORIES:

    return updateObject(state, {
      categories: action.payload,
      message: null,
    });

    case SORT_BY_FILTER:
      let products = [];

      action.payload.map((item) =>
        products.push(JSON.parse(JSON.stringify(item)))
      );

      return updateObject(state, { products: products });

    case FETCH_PROD_BY_FILTER:
      newMessage = action.payload.length === 0 ? "0 products found" : null;
      let updated = [];

      if (action.payload.length === 0) {
        return updateObject(state, { message: newMessage });
      }

      if (state.products.length === 0) {
        return updateObject(state, { products: action.payload, message: null });
        
      } else {
        action.payload.forEach((item) => {
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
        state.filters.forEach((filter) => {
          updatedFilters.push(JSON.parse(JSON.stringify(filter)));
        });

        return updateObject(state, { filters: updatedFilters });
      }

    default:
      return state;
  }
};

export default productsReducer;
