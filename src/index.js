import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/";
import middlewares from "./middleware";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./containers/App";

const store = createStore(reducers, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
