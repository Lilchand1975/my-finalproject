import React, { Component } from "react";
import "./Nav.css";
import logo from "../Images/logo2.png";

class Nav extends Component {
  render() {
    const { name } = this.props;
    return (
      <nav className="nav">
        <div className="row">
          <div className="col-sm-3">
            <img src={logo} />
          </div>
          <div className="col-sm-9">
            <h2 className="head">{name}</h2>
            <p>United we stand strong</p>
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;
