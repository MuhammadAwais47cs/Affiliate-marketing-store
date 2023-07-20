import axios from "axios";
import { baseurl } from "../baseurl";
import {
  ALL_BRAND_REQUEST,
  ALL_BRAND_SUCCESS,
  ALL_BRAND_FAIL,
  NEW_BRAND_REQUEST,
  NEW_BRAND_SUCCESS,
  NEW_BRAND_FAIL,
  BRAND_DETAILS_REQUEST,
  BRAND_DETAILS_SUCCESS,
  BRAND_DETAILS_FAIL,
  CLEAR_ERROR,
} from "../constant/brandConstant";
import { uploadImage } from "../utils/functions";
export const getBrand =
  (keyword = "", currentPage = 1, price = "", state, ratings = 0, id = false) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_BRAND_REQUEST });
      let link = `${baseurl}/api/v1/brands?keyword=${keyword}&page=${currentPage}&price[gte]=''&price[lte]=''`;

      //   let link = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}`;
      //   let link = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      if (state?.category) {
        link = `${baseurl}/api/v1/products?keyword=${keyword}&page=${currentPage}&category=${state?.category}&price[gte]=1000&price[lte]=${price}`;
      }
      if (id) {
        link = `${baseurl}/api/v1/brands/${id}`;
      }
      if (state?.category) {
        link = `${baseurl}/api/v1/products?keyword=${keyword}&page=${currentPage}&category=${state?.category}&price[gte]=1000&price[lte]=${price}`;
      }
      if (state?.brand) {
        link = `${baseurl}/api/v1/products?keyword=${keyword}&page=${currentPage}&brand=${state?.brand}&price[gte]=1000&price[lte]=${price}`;
      }

      const { data } = await axios.get(link);

      console.log("data :>> ", data);
      dispatch({
        type: ALL_BRAND_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_BRAND_FAIL,
        payload: error.response.data.message,
      });
    }
  };
export const getBrandDetails = (id) => async (dispatch) => {
  try {
    console.log("id :>> ", id);
    dispatch({ type: BRAND_DETAILS_REQUEST });
    const { data } = await axios.get(`${baseurl}/api/v1/brand/${id}`);
    dispatch({
      type: BRAND_DETAILS_SUCCESS,
      payload: data.brand,
    });
  } catch (error) {
    dispatch({
      type: BRAND_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};

// Create Brand
export const createBrand = (brandData, images) => async (dispatch) => {
  try {
    dispatch({ type: NEW_BRAND_REQUEST });
    console.log(brandData, "data");
    console.log(images, "images");
    const image = await uploadImage(images[0], "kcfbvaww");
    console.log(image);

    let brand = brandData;
    brand = {
      ...brand,
      images: image,
    };
    console.log("proda", brand);

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `${baseurl}/api/v1/brand/new`,
      brand,
      config
    );

    dispatch({
      type: NEW_BRAND_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_BRAND_FAIL,
      payload: error.response?.data.message,
    });
  }
};
