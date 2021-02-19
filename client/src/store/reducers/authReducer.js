import { FETCH_USER } from "../actions/types";
import { updateObject } from "../../utils/updateObject";

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload.user
        ? updateObject(state, { user: { ...action.payload.user }, isLoggedIn: true })
        : updateObject(state, { user: null, isLoggedIn: false });

    default:
      return state;
  }
}


export default authReducer;