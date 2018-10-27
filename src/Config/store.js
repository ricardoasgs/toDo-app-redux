import { applyMiddleware, createStore } from "redux";
import reduxPromise from "redux-promise";
import thunk from "redux-thunk";

import reducers from "../Reducers/reducers";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middle = [reduxPromise, thunk];

export default applyMiddleware(...middle)(createStore)(reducers, devTools);
