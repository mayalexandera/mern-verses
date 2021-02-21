import axios from 'axios'
import { PLACE_ORDER, FETCH_CURRENT_USER_ORDERS, FETCH_ORDERS_FAILED } from './types' 

export const placeOrder = () => async (dispatch, getState) => {
  const cart = getState().cart
  if (cart._id) {

    const response = await axios.post(`/api/orders/${cart._id}/add`, { params: { totals: cart.totals }})
    dispatch({ type: PLACE_ORDER, payload: response.data })

  }
}

export const fetchCurrentUserOrders = () => async (dispatch, getState) => {
  const user = getState().auth.user._id
  const res = await axios.get(`/api/orders/${user}`)
  debugger
  res.data.status === 404
  ? dispatch({ type: FETCH_ORDERS_FAILED, payload: res.data.message })
  :  dispatch({ type: FETCH_CURRENT_USER_ORDERS, payload: res.data })
 
}