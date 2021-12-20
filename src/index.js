import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-loading-skeleton/dist/skeleton.css";

import FirebaseContext from "./context/firebase";
import { FieldValue, firebase } from "./lib/firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
