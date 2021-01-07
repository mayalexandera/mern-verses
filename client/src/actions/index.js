import axios from "axios";
import { FETCH_USER, FETCH_PLANS, FETCH_SURVEYS, FETCH_PRODUCTS, FETCH_PRODUCT, FETCH_SIZES } from "./types";
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
  const res = await axios.post('/api/stripe', token)

  dispatch({ type: FETCH_USER, payload: res.data})

}

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

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values)

  history.push('/member/surveys')
  dispatch({ type: FETCH_USER, payload: res.data})
}

export const fetchPlans = () => async dispatch => {
  const res = await axios.get('/api/plans')

  dispatch({ type: FETCH_PLANS, payload: res.data })
}

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys')

  dispatch({ type: FETCH_SURVEYS, payload: res.data})
}

export const fetchSizes = (productId) => async (dispatch) => {
  const res = await axios.get("/api/sizes", {
    params: {
    product: productId
  }});

  dispatch({ type: FETCH_SIZES, payload: res.data });
};