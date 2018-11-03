import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  changeUsername,
  changeEmail,
  changePassword,
  changeConfirmPassword,
  signup,
  changeForm
} from "../Actions/authActions";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { loginMode: true };
    this.keyHandler = this.keyHandler.bind(this);
  }

  keyHandler(e) {
    if (e.key === "Enter") {
      const { username, email, password, passwordConfirm } = this.props;
      this.props.signup({ username, email, password, passwordConfirm });
    }
  }

  render() {
    const { name, email, password, passwordConfirm } = this.props;
    const { signup } = this.props;
    return (
      <div className="login-form">
        <form>
          <h2 className="text-center">Signup</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              required="required"
              onChange={this.props.changeUsername}
              value={this.props.name}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              required="required"
              onChange={this.props.changeEmail}
              value={this.props.email}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required="required"
              onChange={this.props.changePassword}
              value={this.props.password}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required="required"
              onChange={this.props.changePasswordConfirm}
              value={this.props.passwordConfirm}
              onKeyUp={this.keyHandler}
            />
          </div>
          <div className="form-group">
            <button
              onClick={() => signup({ name, email, password, passwordConfirm })}
              className="btn btn-primary btn-block btn-custom"
            >
              Signup
            </button>
          </div>
          <div className="clearfix" />
        </form>
        <p className="text-center">
          <a onClick={() => this.props.changeForm("LOGIN")}>Login</a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.auth.username,
  email: state.auth.email,
  password: state.auth.password,
  confirmPassword: state.auth.confirmPassword
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeUsername,
      changeEmail,
      changePassword,
      changeConfirmPassword,
      signup,
      changeForm
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
