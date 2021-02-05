import { FETCH_SURVEYS } from '../actions/types'
// import { updateObject } from "../../utils/updateObject";

const surveysReducer = (state=[], action) => {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload
      default:
        return state
  }
}

export default surveysReducer;