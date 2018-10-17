import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FacebookProvider, Group } from 'react-facebook';
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
            <a href="https://www.facebook.com/mybcgr/">
              <button type="button" id="media-btn" className="fa fa-facebook">   
              </button></a>
              <button type="button" id="media-btn" className="fa fa-twitter">
                <a href="https://twitter.com/"> </a>
              </button>
              <a href ="https://youtu.be/J_yWW_QMX4M" > 
              <button type="button" id="media-btn" 
              className="fa fa-youtube">
              </button>
              </a>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}
export default Ribbon;
