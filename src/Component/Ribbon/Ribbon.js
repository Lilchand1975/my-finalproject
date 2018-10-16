import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Form from "../Form/Form";
// import home from "../Images/home.jpg";
import "./Ribbon.css";

class Ribbon extends Component {
  render() {
    return (
      <div>
        <div className="ribbon">
          <div className="home">
            <div className="webAddress">
              <p>
                Visit us at: <a> www.bcgr.org</a>
              </p>
            </div>
            <div className="registration">
              <Link to="/registration">Login/Register</Link>
            </div>
            <div className="rbn">
              <button type="button" id="media-btn" className="fa fa-facebook">
                <a href="https://facebook.com/login"> </a>
              </button>
              <button type="button" id="media-btn" className="fa fa-twitter">
                <a href="https://twitter.com/"> </a>
              </button>
              <button type="button" id="media-btn" className="fa fa-youtube">
                <a href="https://youtube.com/"> </a>
              </button>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}
export default Ribbon;
