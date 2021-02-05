import axios from 'axios'
import { PLACE_ORDER, FETCH_ORDERS } from './types' 

export const placeOrder = () => async (dispatch, getState) => {
  console.log('in order actions')
  const cartId = getState().cart._id
  const items = getState().cart.items
  const totals = getState().cart.totals
  if (cartId) {
    const response = await axios.post(`/api/order/add`, {
      cartId, totals, items
    })
    dispatch({ type: PLACE_ORDER, payload: response.data })

  }
}
 
export const fetchOrders = () => async (dispatch, getState) => {
  const res = await axios.get(`/api/orders`)

  dispatch({ type: FETCH_ORDERS, payload: res.data})

}