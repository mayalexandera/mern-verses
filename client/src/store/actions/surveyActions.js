import axios from "axios";
import { FETCH_SURVEYS, FETCH_USER } from "./types";

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};


export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/surveys", values);

  history.push("/member/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};
