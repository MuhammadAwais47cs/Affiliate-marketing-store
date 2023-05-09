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
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./reducer/userReducer";
import {
  newBrandReducer,
  brandReducer,
  brandDetailsReducer,
} from "./reducer/brandReducer";
const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  brandDetails: brandDetailsReducer,
  newProduct: newProductReducer,
  newBrand: newBrandReducer,
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
