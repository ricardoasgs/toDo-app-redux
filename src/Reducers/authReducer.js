import {
  TOKEN_VALIDATED,
  USER_FETCHED,
  USERNAME_CHANGED,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  CONFIRM_PASSWORD_CHANGED
} from "../Actions/types";

const userKey = "user";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem(userKey)),
  validToken: false,
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOKEN_VALIDATED:
      if (action.payload) {
        return { ...state, validToken: true };
      } else {
        localStorage.removeItem(userKey);
        return { ...state, validToken: false, user: null };
      }
    case USER_FETCHED:
      localStorage.setItem(userKey, JSON.stringify(action.payload));
      return { ...state, user: action.payload, validToken: true };
    case USERNAME_CHANGED:
      return {
        ...state,
        username: action.payload
      };
    case EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload
      };
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload
      };
    case CONFIRM_PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload
      };
    default:
      return state;
  }
};
