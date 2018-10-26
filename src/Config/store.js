import { applyMiddleware, createStore } from "redux";
import reduxPromise from "redux-promise";

import reducers from "../Reducers/reducers";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default applyMiddleware(reduxPromise)(createStore)(reducers, devTools);
