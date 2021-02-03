import axios from 'axios'
import { PLACE_ORDER } from './types' 

export const placeOrder = () => async (dispatch, getState) => {
  console.log('in order actions')
  const cartId = getState().cart._id
  const totals = getState().cart.totals
  if (cartId) {
    const response = await axios.post(`/api/order/add`, {
      cartId, totals
    })
    dispatch({ type: PLACE_ORDER, payload: response.data })

  }
}