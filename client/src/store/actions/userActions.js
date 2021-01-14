import axios from 'axios'
import { FETCH_USER } from './types'

//setting current_user by finding in collection, or creating a new entry.
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};
