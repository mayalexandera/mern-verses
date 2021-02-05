import { FETCH_PLANS } from "../actions/types";
// import { updateObject } from "../../utils/updateObject";

const plansReducer = (state = null, action) => {
  // console.log(action.payload || false)
  switch (action.type) {
    case FETCH_PLANS:
      // either an object or a string - empty strings are falsey
      return action.payload || false;
    default:
      return state;
  }
}

export default plansReducer;