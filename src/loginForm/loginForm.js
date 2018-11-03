import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { login, changeEmail, changePassword } from "../Actions/authActions";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { loginMode: true };
  }

  onSubmit() {
    const { login, signup } = this.props;
    const { username, email, password, confirmPassword } = this.props;
    this.state.loginMode
      ? login({ email, password })
      : signup({ username, email, password, confirmPassword });
  }

  render() {
    return (
      <div className="login-form">
        <form>
          <h2 className="text-center">Login</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
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
            <button
              onClick={() => this.onSubmit()}
              className="btn btn-primary btn-block btn-custom"
            >
              Log in
            </button>
          </div>
          <div className="clearfix">
            <a href="#" className="pull-right">
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center">
          <a href="#">Create an Account</a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.auth.username,
  email: state.auth.email,
  password: state.auth.password,
  confirmPassword: state.auth.confirmPassword
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ login, changeEmail, changePassword }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
