import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => (
  <li className="nav-item dropdown">
    <a
      className="nav-link dropdown-toggle"
      href="#"
      role="button"
      id="dropdownMenuLink"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Services
    </a>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" />
    <a className="dropdown-item" href="http://learn101.org/neapli.php">
      {" "}
      Nepali language class{" "}
    </a>
    <a className="dropdown-item" href="https://www.uscis.gov/us-citizenship">
      {" "}
      Citizenship preparation class
    </a>
    <a className="dropdown-item" href="#">
      {" "}
      Karate class{" "}
    </a>
    <a className="dropdown-item" href="#">
      {" "}
      Community Services{" "}
    </a>
  </li>
);

export default Services;
