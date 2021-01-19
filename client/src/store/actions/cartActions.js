import axios from "axios";
import { FETCH_CART, ADD_CART_ITEM, DELETE_FAVORITE, DELETE_CART_ITEM, UPDATE_CART_ITEM } from './types'

export const fetchCart = () => async (dispatch, getState) => {
  const user = getState().auth.userId 
  if ( user ) {
    const res = await axios.get(`/api/carts`);
    dispatch({ type: FETCH_CART, payload: res.data });
  }
};

export const addCartItem = (
  productId,
  sizeId,
  name,
  brandName,
  price,
  count,
  size,
  featuredImage
) => async (dispatch, getState) => {
  const res = await axios.post('/api/carts', {
    params: {
      productId,
      sizeId,
      name,
      brandName,
      price,
      count,
      size,
      featuredImage,
    },
  });

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
  )

  dispatch({ type: DELETE_FAVORITE, payload: _id })
}

export const deleteCartItem = (cartItemId) => async (dispatch, getState) => {
  const user = getState().auth._id
  const res = await axios.delete(`/api/carts/${user}/${cartItemId}`)

  dispatch({ type: DELETE_CART_ITEM, payload: res.data })
}

export const updateCartItem= (field, value, cartItem) => async (dispatch, getState) => {
  const user = getState().auth._id
  const res = await axios.put(`/api/carts/${user}/${cartItem._id}`, { field, value, cartItem })

  dispatch({ type: UPDATE_CART_ITEM, payload: res.data })
}