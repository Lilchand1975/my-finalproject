import React, { Component } from "react";
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
      <div className="row">
        <div className="col-sm-3" id="card">
          <h3>Suva Laxmi Store</h3>
        </div>

        <div className="col-sm-6" id="carousel">
          {Carousel.map(Carousel => (
            <p>{Carousel.slide1}</p>
          ))}
        </div>

        <div className="col-sm-3" id="card">
          <h3>Suva Laxmi Store</h3>
        </div>
      </div>
    );
  }
}

export default Carousel;
