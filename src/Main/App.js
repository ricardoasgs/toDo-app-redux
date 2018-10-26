import React, { Component } from "react";
import Routes from "../Main/Routes";
import Menu from "../Template/Menu";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <Routes />
      </div>
    );
  }
}

export default App;
