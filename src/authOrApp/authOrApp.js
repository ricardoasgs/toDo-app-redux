import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import App from "../Main/App";
import Auth from "../loginForm/loginForm";
import { validateToken } from "../Actions/authActions";

class AuthOrApp extends Component {
  componentWillMount() {
    if (this.props.auth.user) {
      this.props.validateToken(this.props.auth.user.token);
    }
  }

  render() {
    const { user, validToken } = this.props.auth;
    console.log(user);
    console.log(validToken);
    if (user && validToken) {
      axios.defaults.headers.common["authorization"] = user.token;
      return <App>{this.props.children}</App>;
    } else if (!user && !validToken) {
      return <Auth />;
    } else {
      return false;
    }
  }
}
const mapStateToProps = state => ({ auth: state.auth });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ validateToken }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthOrApp);
