import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import Card from "../Card/Card"
import Services from "../Services/Services";
import home from "../Images/home.jpg";
import "./navigation.css";

const Navigation = () => (
    <div className="navContainTab">
      <div>
        <ul className="nav nav-pills">
        <li className="nav-item">
        {/* <div className="home">
        <div className="rbn"> */}
          
          <Link className="nav-link"id="home-tab" to="/">{<img
            src={home}
            alt=""
            style={{ height: "40px", width: "50px", mr: "20px" }}
          /> }</Link>
        </li>
        <Card/>
        <li className="nav-item">
          <Link className="nav-link" to="/history">History</Link>
        </li>
        <Services />
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/calendar">Calendar</Link>
          {/* <a herf = "https://www.hamropatro.com/" >Calendar</a> */}
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to="/donate">Donate us</Link>
        </li> 
      </ul>
      </div>
    </div>
);


export default Navigation;