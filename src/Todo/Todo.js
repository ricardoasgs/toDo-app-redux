import React from "react";

import PageHeader from "../Template/PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = props => (
  <React.Fragment>
    <PageHeader name="Tarefas" small="Cadastro" />
    <TodoForm />
    <TodoList />
  </React.Fragment>
);

export default Todo;
