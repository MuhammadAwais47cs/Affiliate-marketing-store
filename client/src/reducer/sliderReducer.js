import {
  ALL_SLIDER_REQUEST,
  ALL_SLIDER_SUCCESS,
  ALL_SLIDER_FAIL,
  SLIDER_DETAILS_REQUEST,
  SLIDER_DETAILS_SUCCESS,
  SLIDER_DETAILS_FAIL,
  NEW_SLIDER_REQUEST,
  NEW_SLIDER_SUCCESS,
  NEW_SLIDER_FAIL,
  NEW_SLIDER_RESET,
  CLEAR_ERRORS,
  CLEAR_ERROR,
} from "../constant/sliderConstant";

export const sliderReducer = (state = { sliders: [] }, action) => {
  switch (action.type) {
    case ALL_SLIDER_REQUEST:
      return {
        loading: true,
        slider: [],
      };
    case ALL_SLIDER_SUCCESS:
      return {
        loading: false,
        sliders: action.payload.sliders[0],
        slidersCount: action.payload.slidersCount,
        resultPerPage: action.payload.resultPerPage,
      };
    case ALL_SLIDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
export const sliderDetailsReducer = (state = { slider: {} }, action) => {
  switch (action.type) {
    case SLIDER_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case SLIDER_DETAILS_SUCCESS:
      return {
        loading: false,
        slider: action.payload,
      };
    case SLIDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const newSliderReducer = (state = { slider: {} }, action) => {
  switch (action.type) {
    case NEW_SLIDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_SLIDER_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        slider: action.payload.slider,
      };
    case NEW_SLIDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_SLIDER_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
