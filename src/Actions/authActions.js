import axios from "axios";

import {
  USER_FETCHED,
  TOKEN_VALIDATED,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USERNAME_CHANGED,
  CONFIRM_PASSWORD_CHANGED,
  FORM_CHANGED,
  FORM_INITIED
} from "./types";

import { OAPI_URL } from "../Config/constants";

const userKey = "user";

export const changeEmail = event => ({
  type: EMAIL_CHANGED,
  payload: event.target.value
});

export const changeUsername = event => ({
  type: USERNAME_CHANGED,
  payload: event.target.value
});

export const changePassword = event => ({
  type: PASSWORD_CHANGED,
  payload: event.target.value
});

export const changeConfirmPassword = event => ({
  type: CONFIRM_PASSWORD_CHANGED,
  payload: event.target.value
});

export const changeForm = form => dispatch =>
  dispatch([
    {
      type: FORM_CHANGED,
      payload: form
    },
    initForm()
  ]);

export const initForm = () => ({
  type: FORM_INITIED
});

export function login(values) {
  return dispatch => {
    axios
      .post(`${OAPI_URL}/login`, values)
      .then(res => {
        localStorage.setItem(userKey, JSON.stringify(res.data));
        dispatch({ type: USER_FETCHED, payload: res.data });
      })
      .catch(e => {
        e.response.data.errors.forEach(error => console.log("Erro", error));
      });
  };
}

export function signup(values) {
  return dispatch => {
    axios
      .post(`${OAPI_URL}/signup`, values)
      .then(res => {
        dispatch({ type: USER_FETCHED, payload: res.data });
      })
      .catch(e => {
        e.response.data.errors.forEach(error => console.log("Erro", error));
      });
  };
}

export function logout() {
  localStorage.removeItem(userKey);
  return { type: TOKEN_VALIDATED, payload: false };
}

export function validateToken(token) {
  return dispatch => {
    if (token) {
      axios
        .post(`${OAPI_URL}/validateToken`, { token })
        .then(resp => {
          if (!resp.data.valid) {
            localStorage.removeItem(userKey);
          }
          dispatch({ type: TOKEN_VALIDATED, payload: resp.data.valid });
        })
        .catch(e => dispatch({ type: TOKEN_VALIDATED, payload: false }));
    } else {
      dispatch({ type: TOKEN_VALIDATED, payload: false });
    }
  };
}
