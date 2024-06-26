import axios from "axios";
import { baseurl } from "../baseurl";
import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERROR,
} from "../constant/productConstant";
import { uploadImage } from "../utils/functions";

export const getProduct =
  (
    keyword = "",
    currentPage = 1,
    price = 500000,
    state,
    ratings = 0,
    id = ""
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });
      let link = `${baseurl}/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=1000&price[lte]=${price}`;

      if (state?.category) {
        link = `${baseurl}/api/v1/products?keyword=${keyword}&page=${currentPage}&category=${state?.category}&price[gte]=1000&price[lte]=${price}`;
      }
      if (id) {
        link = `${baseurl}/api/v1/products?keyword=${keyword}&id=${id}`;
      }
      if (state?.category) {
        link = `${baseurl}/api/v1/products?keyword=${keyword}&page=${currentPage}&category=${state?.category}&price[gte]=1000&price[lte]=${price}`;
      }
      if (state?.brand) {
        link = `${baseurl}/api/v1/products?keyword=${keyword}&page=${currentPage}&brand=${state?.brand}&price[gte]=1000&price[lte]=${price}`;
      }

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`${baseurl}/api/v1/product/${id}`);
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};

// Create Product
export const createProduct = (productData, images) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PRODUCT_REQUEST });

    const image = await uploadImage(images[0], "ssbwpm0g");

    let product = productData;
    product = {
      ...product,
      images: image,
    };

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `${baseurl}/api/v1/products/new`,
      product,
      config
    );

    dispatch({
      type: NEW_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PRODUCT_FAIL,
      payload: error,
    });
  }
};
