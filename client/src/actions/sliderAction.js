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
export const getSlider = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_SLIDER_REQUEST });
    let link = `${baseurl}/api/v1/sliders`;

    const { data } = await axios.get(link);

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

    const imagesUrls = await Promise.all(
      images.map(async (file) => await uploadImage(file, "kcfbvaww"))
    );

    let slider = "";
    slider = {
      ...slider,
      images: imagesUrls,
    };

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `${baseurl}/api/v1/slider/new`,
      slider,
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
