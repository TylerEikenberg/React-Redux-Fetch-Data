import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import { createStore, applyMiddleware, compose } from "redux";
import { userReducer } from "./Redux/Reducers/userReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(userReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
