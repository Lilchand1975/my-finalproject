import React, { Component } from "react";
import { logo } from "../Images/logo1.jpg";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
        <nav className="nav">
        <div className="row">
          <div className="col-sm-3">
            <img
              src={logo}
              alt=""
              style={{
                marginTop: "4px",
                marginLeft: "25px",
                height: "150px",
                width: "150px"
              }}
            />
          </div>

          <div className="col-sm-9">
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
        </div>
      </nav>
  
    <div className="container">
        <div className="row">
            <div className="col-sm-4">
                <p><strong>Dhruva Mishra</strong></p>
                <p><em>President</em></p>
                <p>Address:- 5629 Drayton Dr. Glen Allen Va, 23060</p>
                <p><strong>Phone No:- (804)-982-2281</strong></p>
            </div>
            <div className="col-sm-4">
                <p><strong>Dipak Manger</strong></p>
                <p><em>Vice-president</em></p>
                <p>Address:- 2404 Woodman Hills Court, Glen Allen Va, 23060</p>
                <p><strong>Phone No:- (804)-551-4226</strong></p>
            </div>
            <div className="col-sm-4">
                <p><strong>Chanda Chhetri</strong></p>
                <p><em>General Secretary</em></p>
                <p>Address:- 7926 Chowning Road, Henrico. VA, 23294</p>
                <p><strong>Phone No:- (804)-551-4771</strong></p>
            </div>
        </div>
    </div>
    )
  };
}
export default Contact;
