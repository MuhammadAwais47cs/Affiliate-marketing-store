import axios from "axios";
import { baseurl } from "../baseurl";
import {
  ALL_SLIDER_REQUEST,
  ALL_SLIDER_SUCCESS,
  ALL_SLIDER_FAIL,
  NEW_SLIDER_REQUEST,
  NEW_SLIDER_SUCCESS,
  NEW_SLIDER_FAIL,
  SLIDER_DETAILS_REQUEST,
  SLIDER_DETAILS_SUCCESS,
  SLIDER_DETAILS_FAIL,
  CLEAR_ERROR,
} from "../constant/sliderConstant";
import { uploadImage } from "../utils/functions";
export const getBrand =
  (
    keyword = "",
    currentPage = 1,
    price = "",
    state,
    ratings = 0,
    proName = ""
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_SLIDER_REQUEST });
      let link = `${baseurl}/api/v1/brands?keyword=${keyword}&page=${currentPage}&price[gte]=''&price[lte]=''`;

      //   let link = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}`;
      //   let link = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      if (state?.category) {
        link = `${baseurl}/api/v1/products?keyword=${keyword}&page=${currentPage}&category=${state?.category}&price[gte]=1000&price[lte]=${price}`;
      }
      if (proName) {
        link = `${baseurl}/api/v1/products?keyword=${keyword}&name=${proName}`;
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
        type: ALL_SLIDER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_SLIDER_FAIL,
        payload: error.response.data.message,
      });
    }
  };
export const getBrandDetails = (id) => async (dispatch) => {
  try {
    console.log("id :>> ", id);
    dispatch({ type: SLIDER_DETAILS_REQUEST });
    const { data } = await axios.get(`${baseurl}/api/v1/brand/${id}`);
    dispatch({
      type: SLIDER_DETAILS_SUCCESS,
      payload: data.brand,
    });
  } catch (error) {
    dispatch({
      type: SLIDER_DETAILS_FAIL,
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
export const createSlider = (images) => async (dispatch) => {
  try {
    dispatch({ type: NEW_SLIDER_REQUEST });
    console.log(images, "images........");

    const imagesUrls = await Promise.all(
      images.map(async (file) => await uploadImage(file, "kcfbvaww"))
    );
    console.log("imagesUrls :>> ", imagesUrls);
    // const image = await uploadImage(images[0], "kcfbvaww");
    // console.log(image);
    return;
    let brand = "";
    brand = {
      ...brand,
      // images: image,
    };

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `${baseurl}/api/v1/brand/new`,
      brand,
      config
    );

    dispatch({
      type: NEW_SLIDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_SLIDER_FAIL,
      payload: error.response?.data.message,
    });
  }
};
