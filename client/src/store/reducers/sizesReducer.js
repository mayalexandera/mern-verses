import { FETCH_SIZES } from "../actions/types";
// import { updateObject } from "../../utils/updateObject";

export default function (state = [], action) {
  // console.log(action.payload || false)
  switch (action.type) {
    case FETCH_SIZES:
      // either an object or a string - empty strings are falsey
      return action.payload || false;
    default:
      return state;
  }
}
