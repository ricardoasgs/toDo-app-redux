import {
  TOKEN_VALIDATED,
  USER_FETCHED,
  USERNAME_CHANGED,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  CONFIRM_PASSWORD_CHANGED,
  FORM_CHANGED,
  FORM_INITIED
} from "../Actions/types";

const userKey = "user";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem(userKey)),
  validToken: false,
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  form: "LOGIN"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOKEN_VALIDATED:
      if (action.payload) {
        return { ...state, validToken: true };
      } else {
        return { ...state, validToken: false, user: null };
      }
    case USER_FETCHED:
      console.log("Logou");
      return { ...state, user: action.payload, validToken: true };
    case FORM_INITIED:
      return {
        ...state,
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
      };
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
    case FORM_CHANGED:
      return {
        ...state,
        form: action.payload
      };
    default:
      return state;
  }
};
