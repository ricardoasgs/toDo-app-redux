import { combineReducers } from "redux";
import todoReducer from "../Reducers/todoReducer";
import authReducer from "./authReducer";

const rootReducers = combineReducers({
  todo: todoReducer,
  auth: authReducer
});

export default rootReducers;
