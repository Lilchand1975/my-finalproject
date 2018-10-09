import React, { Component } from "react";
import "./Ribbon.css";

class Ribbon extends Component {
  render() {
    const { button } = this.props;
    return (
      <div className="home">
        <div className="btns">
          <button type="button">Home</button>
          <button type="button">Services</button>
          <button type="button">Events</button>
          <button type="button">About Us</button>
          <button type="button">Contact Us</button>
          <button type="button">Calendar</button>
          <button type="button">Donate</button>
        </div>
      </div>
    );
  }
}

export default Ribbon;
