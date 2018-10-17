import React, { Component } from "react";
import "./Nav.css";
import logo from "../Images/logo1.png";

class Nav extends Component {
  render() {
    //const { name } = props;
    return (
      <nav className="nav">
        <div className="row">
          <div className="col-sm-3">
            <img
              src={logo}
              alt=""
              style={{
                marginTop: "1px",
                marginLeft: "25px",
                height: "150px",
                width: "150px"
              }}
            />
          </div>

          <div className="col-sm-6">
            <h1
              className="head"
              style={{
                fontSize: "30px",
                textShadow: "0 0 3px #FF0000"
              }}
            >
              BHUTANESE COMMUNITY OF GREATER RICHMOND (BCGR)-VA
            </h1>
            <p>United we stand strong</p>
          </div>

          <div className="topnav" col-sm-3>
            <div class="search-container">
              <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit" id="search-btn">
                  <i className="fa fa-search" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;
