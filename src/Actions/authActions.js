import axios from "axios";

import {
  USER_FETCHED,
  TOKEN_VALIDATED,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  OAPI_URL
} from "./types";

export const changeEmail = event => ({
  type: EMAIL_CHANGED,
  payload: event.target.value
});

export const changePassword = event => ({
  type: PASSWORD_CHANGED,
  payload: event.target.value
});

export function login(values) {
  return submit(values, `${OAPI_URL}/login`);
}

export function signup(values) {
  return submit(values, `${OAPI_URL}/signup`);
}

function submit(values, url) {
  return dispatch => {
    axios
      .post(url, values)
      .then(resp => {
        dispatch([{ type: USER_FETCHED, payload: resp.data }]);
      })
      .catch(e => {
        e.response.data.errors.forEach(error => console.log("Erro", error));
      });
  };
}

export function logout() {
  return { type: TOKEN_VALIDATED, payload: false };
}

export function validateToken(token) {
  return dispatch => {
    if (token) {
      axios
        .post(`${OAPI_URL}/validateToken`, { token })
        .then(resp => {
          dispatch({ type: TOKEN_VALIDATED, payload: resp.data.valid });
        })
        .catch(e => dispatch({ type: TOKEN_VALIDATED, payload: false }));
    } else {
      dispatch({ type: TOKEN_VALIDATED, payload: false });
    }
  };
}
