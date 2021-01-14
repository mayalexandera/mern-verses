import axios from "axios";
import { FETCH_PLANS } from './types'
export const fetchPlans = () => async (dispatch) => {
  const res = await axios.get("/api/plans");

  dispatch({ type: FETCH_PLANS, payload: res.data });
};
