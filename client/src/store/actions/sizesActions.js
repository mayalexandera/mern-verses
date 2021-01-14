import axios from "axios";
import { FETCH_SIZES } from "./types";

export const fetchSizes = (productId) => async (dispatch) => {
  const res = await axios.get("/api/sizes", {
    params: {
      product: productId,
    },
  });

  dispatch({ type: FETCH_SIZES, payload: res.data });
};
