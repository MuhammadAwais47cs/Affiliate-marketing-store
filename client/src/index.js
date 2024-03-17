import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import ReactGA from "react-ga4";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transitions: transitions.SCALE,
};

ReactGA.initialize("G-CP9KBHEXHG");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>
);
