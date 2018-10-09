import React, { Component } from "react";
import "./Carousel.css";
import esl from "../Images/esl.jpg";

class Carousel extends Component {
  render() {
    return (
      <Carousel className="carousel">
        <div>
          <img src={esl} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="../images/image.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="../images/lhosar.jpg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="../images/teej.jpg" />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src="../images/esl2.jpg" />
          <p className="legend">Legend 5</p>
        </div>
      </Carousel>
    );
  }
}
export default Carousel;
