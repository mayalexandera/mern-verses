import axios from 'axios'
import { FETCH_USER } from './types'
import * as actions from '../actions/index'

//setting current_user by finding in collection, or creating a new entry.
export const fetchUser = () => async (dispatch) => {
  // const res = await axios.get("/api/current_user");
  const res = await axios.get("/api/current_user");

   dispatch({ type: FETCH_USER, payload: res.data });
  dispatch(actions.fetchCart())
  dispatch(actions.fetchFavorites())
};

export const startAuthProcess = () => async(dispatch) => {

}

//add auth handler  
