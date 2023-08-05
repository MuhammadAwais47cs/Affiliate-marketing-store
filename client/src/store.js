import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  productDetailsReducer,
  productReducer,
  cre,
  newProductReducer,
} from "./reducer/productReducer";
import {
  // allUsersReducer,
  // forgotPasswordReducer,
  // profileReducer,
  // userDetailsReducer,
  userReducer,
} from "./reducer/userReducer";
import {
  newBrandReducer,
  brandReducer,
  brandDetailsReducer,
} from "./reducer/brandReducer";
import {
  newSliderReducer,
  sliderDetailsReducer,
  sliderReducer,
} from "./reducer/sliderReducer";
const reducer = combineReducers({
  products: productReducer,
  brands: brandReducer,
  sliders: sliderReducer,
  productDetails: productDetailsReducer,
  brandDetails: brandDetailsReducer,
  sliderDetails: sliderDetailsReducer,
  newProduct: newProductReducer,
  newBrand: newBrandReducer,
  newSlider: newSliderReducer,
  user: userReducer,
});
let initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
