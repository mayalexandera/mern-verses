import { FETCH_PLANS } from "../actions/types";

const plansReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_PLANS:
      return action.payload || false;
    default:
      return state;
  }
};

export default plansReducer;
