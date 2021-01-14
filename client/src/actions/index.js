import axios from "axios";
import {
  FETCH_USER,
  FETCH_PLANS,
  FETCH_SURVEYS,
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  FETCH_SIZES,
  ADD_FAVORITE,
  ADD_CART_ITEM,
  FETCH_FAVORITE_SIZES,
  DELETE_FAVORITE,
} from "./types";
/*
  the whole purpose of redux-thunk is to inspect whatever value is returned from the action creator
*/

// action creators

//setting current_user by finding in collection, or creating a new entry.
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

//sending Stripe token to backend - token is from Stripe API
export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleThreeMonthToken = (token, amt, credits) => async (
  dispatch
) => {
  const res = await axios.post("/api/stripe", token, {
    params: { amt, credits },
  });

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchProducts = () => async (dispatch) => {
  const res = await axios.get("/api/products");

  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};

export const fetchProduct = (productId) => async (dispatch) => {
  const res = await axios.get("/api/products/:id", {
    params: { productId },
  });

  dispatch({ type: FETCH_PRODUCT, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/surveys", values);

  history.push("/member/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchPlans = () => async (dispatch) => {
  const res = await axios.get("/api/plans");

  dispatch({ type: FETCH_PLANS, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const fetchSizes = (productId) => async (dispatch) => {
  const res = await axios.get("/api/sizes", {
    params: {
      product: productId,
    },
  });

  dispatch({ type: FETCH_SIZES, payload: res.data });
};

export const addFavorite = (
  sizeId,
  productId,
  name,
  brandName,
  price,
  size,
  featuredImage
) => async (dispatch) => {
  const res = await axios.post(`/api/favorites`, {
    params: {
      sizeId,
      productId,
      name,
      brandName,
      price,
      size,
      featuredImage,
    },
  });
  dispatch({ type: ADD_FAVORITE, payload: res.data });
};

export const deleteFavorite = (_id) => async (dispatch) => {
  const res = await axios.delete(`/api/favorites/${_id}`);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const addFavoriteToCart = (
  sizeId,
  product,
  count,
  name,
  price,
  size,
  featuredImage,
  _id
) => async (dispatch) => {
  await dispatch(
    addCartItem(sizeId, product, count, name, price, size, featuredImage)
  ).then(deleteFavorite(_id));
};

export const fetchFavoriteSizes = () => async (dispatch) => {
  const res = await axios.get("/api/member/:id/favorites/sizes");

  dispatch({ type: FETCH_FAVORITE_SIZES, payload: res.data });
};

export const addCartItem = (
  sizeId,
  productId,
  count,
  name,
  price,
  size,
  featuredImage
) => async (dispatch, getState) => {
  const res = await axios.post(`/api/carts`, {
    params: {
      sizeId,
      productId,
      count,
      name,
      price,
      size,
      featuredImage,
    },
  });

  dispatch({ type: ADD_CART_ITEM, payload: res.data });
};
