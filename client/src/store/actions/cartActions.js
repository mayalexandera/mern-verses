import axios from "axios";
import { FETCH_CART, ADD_CART_ITEM, DELETE_FAVORITE } from './types'

export const fetchCart = () => async (dispatch, getState) => {
  const res = await axios.get(`/api/carts`);

  dispatch({ type: FETCH_CART, payload: res.data });
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