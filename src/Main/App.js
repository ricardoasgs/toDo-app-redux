import React, { Component } from "react";
import Menu from "../Template/Menu";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <React.Fragment>{this.props.children}</React.Fragment>
      </div>
    );
  }
}

export default App;
