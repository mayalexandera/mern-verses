import axios from "axios";
import { FETCH_USER } from "./types";
/*
  the whole purpose of redux-thunk is to inspect whatever value is returned from the action creator
*/

// action creator
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

