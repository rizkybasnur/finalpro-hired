import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import allRed from "./redux/reducers/Reducers";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const store = createStore(
  allRed,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
