import React from "react";
import { Router, Route, IndexRoute, Redirect, hashHistory } from "react-router";

import Todo from "../Todo/Todo";
import About from "../About/About";
import AuthOrApp from "../authOrApp/authOrApp";

export default props => (
  <Router history={hashHistory}>
    <Route path="/" component={AuthOrApp}>
      <IndexRoute component={Todo} />
      <Route path="todo" component={Todo} />
      <Route path="about" component={About} />
    </Route>
    <Redirect from="*" to="/" />
  </Router>
);
