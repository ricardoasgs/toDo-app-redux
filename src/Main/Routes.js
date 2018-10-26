import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";

import Todo from "../Todo/Todo";
import About from "../About/About";

export default props => (
  <Router history={hashHistory}>
    <Route path="/todo" component={Todo} />
    <Route path="/about" component={About} />
    <Redirect from="*" to="/todo" />
  </Router>
);
