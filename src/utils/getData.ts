import { setLoading, setErrors, setData } from "../store/slices/serverdata";
import { AppThunk } from "../store/store";
import axios from "axios";

export const getData = (): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const baseURL: string = "https://jsonplaceholder.typicode.com/posts";

      const res = await axios.get(baseURL);

      dispatch(setLoading(false));
      dispatch(setData(res.data));
    } catch (error) {
      dispatch(setErrors(error));
      dispatch(setLoading(false));
    }
  };
};
