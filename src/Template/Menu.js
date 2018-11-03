import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router";

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
                <Link to="todo">Tarefas</Link>
              </li>
              <li>
                <Link to="about">Sobre</Link>
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
