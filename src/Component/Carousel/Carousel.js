import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./Carousel.css";

class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      Carousel: [
        {
          id: 1,
          slide1: "<img src='../Images/esl.jpg' alt='' />",
          legend1: "<p>Attending ESL class</p>"
        },
        {
          id: 2,
          slide2: "<img src='../Images/esl2.jpg' alt='' />",
          legend2: "<p>Attending ESL class</p>"
        },
        {
          id: 3,
          slide3: "<img src='../Images/image.jpg' alt='' />",
          legend3: "<p>Cultural dance</p>"
        },
        {
          id: 4,
          slide4: "<img src='../Images/lhosar.jpg' alt='' />",
          legend4: "<p>Celebrating lhosar</p>"
        },
        {
          id: 5,
          slide5: "<img src='../Images/teej.jpg' alt='' />",
          legend5: "<p>Celebrating teej festival</p>"
        }
      ]
    };
  }
  render() {
    const { Carousel } = this.state;
    return (
      <div>

        <Route exact path="/" component={() =>
          <div className="row">
            <div className="col-sm-3" id="card">
              <h3>Suva Laxmi Store</h3>
            </div>

            <div className="col-sm-6" id="carousel">
              {Carousel.map((Carousel, i) => (
                <p key={i}>{Carousel.slide1}</p>
              ))}
            </div>

            <div className="col-sm-3" id="card">
              <h3>Suva Laxmi Store</h3>
            </div>
          </div>
        } />
        
        <Route exact path="/services"
          component={() =>
            <div className="row">
              <h3 className= "service-section">What we do...</h3>
              <p className="service-overview">Bhutanese Community of Greater Richmond (BCGR) is  501 © registered organization established to assist and support newly arrived refugee families in Richmond Metro Area. Organizations deliver support services such as ESL classes, citizenship preparation classes, welfare benefits application, driver license preparation classes etc. 
                Organization also runs a timely and routinely scheduled cultural, social, and community educational events........... 
              </p>
            </div>
          } />

       <Route exact path="/contact"
          component={() =>
            <div className="row">
              <div className = "col-md-4">
              <h4> Contact us</h4>
                <li>9633 Maelee Mews</li>
                <li>Glen Allen, VA 23060</li>
                <i  class="fa">&#xf1ac;</i> (999) 999-9999
              </div>
              <div className = "col-md-4">
                <form className="form">
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                  </div>
                  <div className="form-group">
                    <label for="exampleFormControlSelect1">How you describe your involvment with BCGR?</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                      <option>As Community member</option>
                      <option>Aa a volunteer</option>
                      <option>Well wisher</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="exampleFormControlTextarea1">Insert your concerns here</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
              </div>
            </div>
          } />
      </div>
    );
  }
}

export default Carousel;
