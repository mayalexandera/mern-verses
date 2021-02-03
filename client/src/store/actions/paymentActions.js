import axios from "axios";
import { FETCH_USER } from "./types";
//sending Stripe token to backend - token is from Stripe API
export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleThreeMonthToken = (token, amt, credits, items) => async (
  dispatch
) => {
  const res = await axios.post("/api/stripe", token, {
    params: { amt, credits, items },
  });

  dispatch({ type: FETCH_USER, payload: res.data });
};
