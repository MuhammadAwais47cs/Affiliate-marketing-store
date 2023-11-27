import {
  ALL_BRAND_REQUEST,
  ALL_BRAND_SUCCESS,
  ALL_BRAND_FAIL,
  BRAND_DETAILS_REQUEST,
  BRAND_DETAILS_SUCCESS,
  BRAND_DETAILS_FAIL,
  NEW_BRAND_REQUEST,
  NEW_BRAND_SUCCESS,
  NEW_BRAND_FAIL,
  NEW_BRAND_RESET,
  CLEAR_ERRORS,
  CLEAR_ERROR,
} from "../constant/brandConstant";

export const brandReducer = (state = { brands: [] }, action) => {
  switch (action.type) {
    case ALL_BRAND_REQUEST:
      return {
        loading: true,
        brand: [],
      };
    case ALL_BRAND_SUCCESS:
      return {
        loading: false,
        brands: action.payload.brands,
        cateName: action.payload.cateName,
        brandsCount: action.payload.brandsCount,
        resultPerPage: action.payload.resultPerPage,
      };
    case ALL_BRAND_FAIL:
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
export const brandDetailsReducer = (state = { brand: {} }, action) => {
  switch (action.type) {
    case BRAND_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case BRAND_DETAILS_SUCCESS:
      return {
        loading: false,
        brand: action.payload,
      };
    case BRAND_DETAILS_FAIL:
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

export const newBrandReducer = (state = { brand: {} }, action) => {
  switch (action.type) {
    case NEW_BRAND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_BRAND_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        brand: action.payload.brand,
      };
    case NEW_BRAND_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_BRAND_RESET:
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
