import { FETCH_USER } from "../actions/types";
import { updateObject } from "../../utils/updateObject";

const initialState = {
  isLoggedIn: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload
        ? updateObject(state, { user: { ...action.payload }, isLoggedIn: true })
        : updateObject(state, { user: null, isLoggedIn: false });

    default:
      return state;
  }
}
