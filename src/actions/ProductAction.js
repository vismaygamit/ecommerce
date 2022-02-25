import {
  ALL_PRODUCTS_FAIL,
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
} from "../constants/ProductConstants";
import axios from "axios";

// get All Categories
export const getAllProducts = (pageSize, page) => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_REQUEST });
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const { data } = await axios.get(
      `http://localhost:3040/api/product?pagesize=${pageSize}&page=${page}`
    );
    if (data) {
      if (data.maxProducts > 0) {
        dispatch({
          type: ALL_PRODUCTS_SUCCESS,
          payload: data,
        });
      }
    }
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS_FAIL,
      payload: true,
    });
  }
};
