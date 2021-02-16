import axios from "axios";
import {
  FETCH_CART,
  ADD_CART_ITEM,
  DELETE_FAVORITE,
  DELETE_CART_ITEM,
  UPDATE_CART_ITEM,
  HANDLE_CART_TOTAL,
} from "./types";

export const fetchCart = () => async (dispatch, getState) => {
  const user = getState().auth.isLoggedIn;
  console.log(user);
  if (user) {
    const res = await axios.get(`/api/carts`);

    await dispatch({ type: FETCH_CART, payload: res.data });
    dispatch(calculateCartTotal());
  }
};

export const addCartItem = (product, productSize) => async (
  dispatch,
  getState
) => {
  const res = await axios.post("/api/carts", { product, productSize });

  dispatch({ type: ADD_CART_ITEM, payload: res.data });
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
  );

  dispatch({ type: DELETE_FAVORITE, payload: _id });
};

export const deleteCartItem = (cartItemId) => async (dispatch, getState) => {
  const user = getState().auth.user._id;
  const res = await axios.delete(`/api/carts/${user}/${cartItemId}`);

  dispatch({ type: DELETE_CART_ITEM, payload: res.data });
};

export const updateCartItem = (field, value, cartItem) => async (
  dispatch,
  getState
) => {
  const user = getState().auth.user._id;
  const res = await axios.put(`/api/carts/${user}/${cartItem._id}`, {
    field,
    value,
    cartItem,
  });

  await dispatch({ type: UPDATE_CART_ITEM, payload: res.data });
  dispatch(calculateCartTotal());
};

export const calculateCartTotal = () => (dispatch, getState) => {
  const items = getState().cart.items;
  let newTotal = 0;
  let totals = {
    subTotal: 0,
    estTax: 0,
    estShipping: 0,
    total: 0,
  };
  items.forEach((item) => {
    newTotal += item.price * item.count;
  });

  totals.subTotal = Number(parseFloat(newTotal.toFixed(2)));
  totals.estTax = Number(parseFloat(totals.subTotal * 0.08).toFixed(2));
  totals.estShipping = 7;
  totals.total = Number(
    parseFloat(totals.estShipping + totals.estTax + totals.subTotal).toFixed(2)
  );
  dispatch({ type: HANDLE_CART_TOTAL, payload: totals });
};
