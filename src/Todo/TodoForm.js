import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDescription, search, add, clear } from "../Actions/todoActions";

import Grid from "../Template/Grid";
import IconButton from "../Template/IconButton";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  componentWillMount() {
    this.props.search(this.props.id);
  }

  keyHandler(e) {
    const { add, search, description, clear } = this.props;
    if (e.key === "Enter") {
      e.shiftKey ? search(description) : add(description);
    } else if (e.key === "Escape") {
      clear();
    }
  }

  render() {
    const { add, search, description, id } = this.props;
    return (
      <div role="form" className="todoForm">
        <Grid cols="12 9 10">
          <input
            id="description"
            className="form-control"
            placeholder="Adicione uma Tarefa"
            onChange={this.props.changeDescription}
            value={this.props.description}
            onKeyUp={this.keyHandler}
          />
        </Grid>

        <Grid cols="12 3 2">
          <IconButton
            styles="primary"
            icon="plus"
            onClick={() => add(id, description)}
          />
          <IconButton
            styles="info"
            icon="search"
            onClick={() => search(id, description)}
          />
          <IconButton
            styles="default"
            icon="close"
            onClick={this.props.clear}
          />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  description: state.todo.description,
  id: state.auth.user._id
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeDescription, search, add, clear }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
