import { FETCH_USER, ADD_FAVORITE, ADD_CART_ITEM } from '../actions/types'

export default function(state = null, action) {
  // console.log(action.payload || false)
  switch (action.type) {
    case FETCH_USER:
      // either an object or a string - empty strings are falsey
      return action.payload || false;
    case ADD_FAVORITE:
      return action.payload || false;
    case ADD_CART_ITEM:
      return action.payload || false;
    default:
      return state;
  }
}