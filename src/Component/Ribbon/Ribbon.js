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
                Visit us at:
                <a href="https://www.facebook.com/1059927480767666/photos/1064489276978153/">
                  www.bcgr.org
                </a>
              </p>
            </div>
            <div className="registration">
              <Link to="/registration">Login/Register</Link>
            </div>
            <div className="rbn">
              <a href="https://facebook.com/">
                <button
                  type="button"
                  id="media-btn"
                  className="fa fa-facebook"
                />
              </a>
              <a href="https://twitter.com/">
                <button
                  type="button"
                  id="media-btn"
                  className="fa fa-twitter"
                />
              </a>
              <a href="https://www.youtube.com/">
                <button
                  type="button"
                  id="media-btn"
                  className="fa fa-youtube"
                />
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
