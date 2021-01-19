import axios from 'axios'
import { FETCH_USER } from './types'

//setting current_user by finding in collection, or creating a new entry.
export const fetchUser = () => async (dispatch) => {
  // dispatch(fetchUserStart)
  const res = await axios.get("/api/current_user");
  console.log('fetchuser', res.data)

  dispatch({ type: FETCH_USER, payload: res.data });
};

//add auth handler  