import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import IconButton from "../Template/IconButton";
import "../Template/custom.css";
import { markAsDone, markAsPending, remove } from "../Actions/todoActions";

const TodoList = props => {
  const { description } = props;

  const renderRows = () => {
    const list = props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? "markedAsDone" : ""}>{todo.description}</td>
        <td>
          <IconButton
            styles="success"
            icon="check"
            onClick={() => props.markAsDone(todo, description)}
            hide={todo.done}
          />
          <IconButton
            styles="warning"
            icon="undo"
            onClick={() => props.markAsPending(todo, description)}
            hide={!todo.done}
          />
          <IconButton
            styles="danger"
            icon="trash-o"
            onClick={() => props.remove(todo, description)}
            hide={!todo.done}
          />
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  list: state.todo.list,
  description: state.todo.description
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
