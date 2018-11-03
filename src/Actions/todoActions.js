import axios from "axios";
import { DESCRIPTION_CHANGED, TODO_CLEAR, TODO_SEARCHED } from "./types";
import { API_URL } from "../Config/constants";

export const changeDescription = event => ({
  type: DESCRIPTION_CHANGED,
  payload: event.target.value
});

export const search = description => {
  const search = description ? `&description__regex=/${description}/` : "";
  const request = axios.get(`${API_URL}?sort=-createdAt${search}`);
  return { type: TODO_SEARCHED, payload: request };
};

export const add = description => {
  return dispatch =>
    axios
      .post(API_URL, { description })
      .then(res => dispatch(clear()))
      .then(res => dispatch(search()));
};

export const remove = (todo, description) => {
  return dispatch =>
    axios
      .delete(`${API_URL}/${todo._id}`)
      .then(res => dispatch(search(description)));
};

export const markAsDone = (todo, description) => {
  return dispatch =>
    axios
      .put(`${API_URL}/${todo._id}`, { ...todo, done: true })
      .then(res => dispatch(search(description)));
};

export const markAsPending = (todo, description) => {
  return dispatch =>
    axios
      .put(`${API_URL}/${todo._id}`, { ...todo, done: false })
      .then(res => dispatch(search(description)));
};

export const clear = () => {
  return [{ type: TODO_CLEAR }, search()];
};
