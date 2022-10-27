import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
// import {configureStore} from "redux-toolkit"
import thunk from "redux-thunk";

import reducer from "./reducers";

import App from "./App";

const store = createStore(reducer, compose(applyMiddleware(thunk)));
<<<<<<< HEAD
const root = ReactDom.createRoot(document.getElementById('root'));

=======
const root = ReactDom.createRoot(document.getElementById("root"));
>>>>>>> 3ac36cf94fbdaf2987fe4adaae23b41d0f225e10
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
