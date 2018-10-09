import React, { Component } from "react";
import "./Carousel.css";

class Carousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="../Images/esl.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="../Images/esl2.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="../Images/image.jpg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="../Images/lhosar.jpg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}

export default Carousel;
