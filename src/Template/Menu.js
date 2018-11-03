import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { logout } from "../Actions/authActions";

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse bg-inverse">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#/">
              <i className="fa fa-calendar-check-o" aria-hidden="true" /> Todo
              App
            </a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <a href="#/todos">Tarefas</a>
              </li>
              <li>
                <a href="#/about">Sobre</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/" onClick={this.props.logout}>
                  Sair
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Menu);
