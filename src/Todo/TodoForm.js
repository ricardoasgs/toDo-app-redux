import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDescription, search, add } from "../Actions/todoActions";

import Grid from "../Template/Grid";
import IconButton from "../Template/IconButton";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  componentWillMount() {
    this.props.search();
  }

  keyHandler(e) {
    const { add, search, description } = this.props;
    if (e.key === "Enter") {
      e.shiftKey ? search() : add(description);
    } else if (e.key === "Escape") {
      this.props.handleClear();
    }
  }

  render() {
    const { add, search, description } = this.props;
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
            onClick={() => add(description)}
          />
          <IconButton styles="info" icon="search" onClick={() => search()} />
          <IconButton
            styles="default"
            icon="close"
            onClick={this.props.handleClear}
          />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  description: state.todo.description
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeDescription, search, add }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
