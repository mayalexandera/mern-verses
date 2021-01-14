import { FETCH_USER } from '../actions/types'
import { updateObject } from "../../utils/updateObject";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}