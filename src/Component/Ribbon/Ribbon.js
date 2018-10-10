import React, { Component } from "react";
import "./Ribbon.css";

class Ribbon extends Component {
  render() {
    const { button } = this.props;
    return (
      <div className="home">
        <div className="rbn">
          <img
            src="../Images/home.jpg"
            style={{
              height: "40px",
              width: "50px"
            }}
          />
          <button type="button" className="btns">
            {"Home"}
          </button>
          <button type="button" className="btns">
            {"Services"}
          </button>
          <button type="button" className="btns">
            Events
          </button>
          <button type="button" className="btns">
            About Us
          </button>
          <button type="button" className="btns">
            Contact Us
          </button>
          <button type="button" className="btns">
            Calendar
          </button>
          <button type="button" className="btns">
            Calendar
          </button>
          <button type="button" className="btns">
            Donate
          </button>
        </div>
      </div>
    );
  }
}

export default Ribbon;
