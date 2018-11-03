import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  login,
  changeEmail,
  changePassword,
  changeForm
} from "../Actions/authActions";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { loginMode: true };
    // this.keyHandler = this.keyHandler.bind(this);
  }

  // keyHandler(e) {
  //   if (e.key === "Enter") {
  //     const { email, password } = this.props;
  //     this.props.login({ email, password });
  //   }
  // }

  render() {
    const { login } = this.props;
    const { email, password } = this.props;
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
              // onKeyUp={this.keyHandler}
            />
          </div>
          <div className="form-group">
            <button
              onClick={() => login({ email, password })}
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
          <a onClick={() => this.props.changeForm("SIGNUP")}>
            Create an Account
          </a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  username: state.auth.username,
  email: state.auth.email,
  password: state.auth.password,
  confirmPassword: state.auth.confirmPassword
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { login, changeEmail, changePassword, changeForm },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
