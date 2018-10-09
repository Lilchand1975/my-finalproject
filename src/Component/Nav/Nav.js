import React, { Component } from "react";
import "./Nav.css";
import logo from "../Images/logo1.png";

class Nav extends Component {
  render() {
    // const { name } = props;
    return (
      <nav className="nav">
        <div className="row">
          <div className="col-sm-3">
            <img src={logo} alt="" />
          </div>

          <div className="col-sm-9">
            <h1 className="head" style={{ fontSize: "50px" }}>
              BHUTANESE COMMUNITY OF GREATER RICHMOND (BCGR)-VA
            </h1>
            <p>United we stand strong</p>
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;
