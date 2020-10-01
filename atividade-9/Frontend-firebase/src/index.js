import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./Frontend/App";
import Firebase from './Frontend/src/Utils/firebase'
import FirebaseContext from './Frontend/src/Utils/FirebaseContext'
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FirebaseContext.Provider>,

  document.getElementById("root")
);
