import { ADD_ORDER } from "../actions/types";
import { updateObject } from "../../utils/updateObject";

const initialState = {
  orders: [],
  order: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ORDER:
      console.log(action.payload)
      return updateObject(state, { order: action.payload });
    default:
      return state;
  }
}