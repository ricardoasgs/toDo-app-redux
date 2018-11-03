import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import App from "../Main/App";
import LoginForm from "../loginForm/loginForm";
import { validateToken } from "../Actions/authActions";
import SignupForm from "../signupForm/signupForm";

class AuthOrApp extends Component {
  componentWillMount() {
    //localStorage.removeItem("user");
    if (this.props.auth.user) {
      this.props.validateToken(this.props.auth.user.token);
    }
  }

  render() {
    const { user, validToken } = this.props.auth;
    if (user && validToken) {
      axios.defaults.headers.common["authorization"] = user.token;
      return <App>{this.props.children}</App>;
    } else if (!user && !validToken) {
      if (this.props.auth.form === "SIGNUP") {
        return <SignupForm />;
      } else {
        return <LoginForm />;
      }
    } else {
      return false;
    }
  }
}
const mapStateToProps = state => ({ auth: state.auth, form: state.auth.form });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ validateToken }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthOrApp);
