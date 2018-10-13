import React, { Component } from "react";
import home from "../Images/home.jpg";
import "./Ribbon.css";

class Ribbon extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     location: [
  //       {
  //         id: 0,
  //         title: "Nepali language class",
  //         selected: false,
  //         key: "teaching"
  //       },
  //       {
  //         id: 1,
  //         title: "DMV learners class",
  //         selected: false,
  //         key: "teaching"
  //       },
  //       {
  //         id: 2,
  //         title: "Citizenship Preparation class",
  //         selected: false,
  //         key: "teaching"
  //       },
  //       {
  //         id: 3,
  //         title: "community service",
  //         selected: false,
  //         key: "teaching"
  //       }
  //     ],

  render() {
    const { button } = this.props;
    return (
      <div className="home">
        <div className="rbn">
          <img
            src={home}
            alt=""
            style={{ height: "40px", width: "50px", mr: "20px" }}
          />
          {/* drop down begins */}
          <div class="btn-group">
            <button
              type="button"
              class="btn dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Services
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="http://learn101.org/">
                Nepali language class
              </a>
              <a class="dropdown-item" href="https://www.uscis.gov/">
                Citizenship preparation class
              </a>
              <a
                class="dropdown-item"
                href="https://www.communityservices.org/"
              >
                Community services
              </a>
              <a class="dropdown-item" href="https://www.rukk.org/">
                Karate class
              </a>
            </div>
          </div>
          <button type="button" className="btns">
            About Us
          </button>
          <button type="button" className="btns">
            Contact Us
          </button>
          <button type="button" className="btns">
            <a href="https://www.hamropatro.com/">Calendar</a>
          </button>
          <button type="button" className="btns">
            <a href="https://oam.wellsfargo.com/oamo/identity/enrollment">
              Donate US
            </a>
          </button>

          <button type="button" className="fa fa-facebook">
            <a href="https://facebook.com/login"> </a>
          </button>
          <button type="button" className="fa fa-twitter">
            <a href="https://twitter.com/"> </a>
          </button>
        </div>
      </div>
    );
  }
}
export default Ribbon;
