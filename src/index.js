import "./index.css";
import App from "./App";
import React from "react";
import thunk from "redux-thunk";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import allRed from "./redux/reducers/Reducers";
import { firebaseConfig } from "./firebaseConfig";
import { createStore, applyMiddleware, compose } from "redux";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // agar bisa dibaca redux devtools
const store = createStore(allRed, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
