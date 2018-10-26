import { combineReducers } from "redux";
import todoReducer from "../Reducers/todoReducer";

const rootReducers = combineReducers({
  todo: todoReducer
});

export default rootReducers;
