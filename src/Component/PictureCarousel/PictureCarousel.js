import React, { Component } from "react";
import esl from "../Images/esl.png";
import esl2 from "../Images/esl2.jpg";
import image from "../Images/image.jpg";
import lhosar from "../Images/lhosar.jpg";
import teej from "../Images/teej.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./PictureCarousel.css";

class PictureCarousel extends Component {
  state = {
    slideIndex: 0,
    slide: true,
    interval: 2
  };

  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }

  play() {
    this.slider.play();
  }

  render() {
    return (
      <div className="row">
        <div ClassName="col-sm-4" id="card">
          <h4 className="ads">Advertisement:</h4>
          <ul>
            <br />
            <li> Suva Laxmi store </li>
            <br />
            <li> Apex Care Link </li>
            <br />
            <li> Richmond Karate Kids </li>
            <br />
            <li> Everest Financial </li>
            <br />
          </ul>
        </div>
        {/* Caoursel begins here */}

        <div className="col-sm-8">
          <Carousel
            slideIndex={this.state.slideIndex}
            afterSlide={slideIndex => this.setState({ slideIndex })}
            slide={this.state.slide}
            interval={this.state.interval}
            className="carousel"
            style={{
              height: "50 px"
            }}
          >
            <div>
              <img
                src={esl}
                alt=""
                style={{
                  height: "50 px"
                }}
              />
              <p className="legend"> Legend 1 </p>
            </div>
            <div>
              <img
                src={esl2}
                alt=""
                style={{
                  height: "50 px"
                }}
              />
              <p className="legend"> Legend 2 </p>
            </div>
            <div>
              <img src={image} alt="" />
              <p className="legend"> Legend 3 </p>
            </div>
            <div>
              <img src={lhosar} alt="" />
              <p className="legend"> Legend 4 </p>
            </div>
            <div>
              <img src={teej} alt="" />
              <p className="legend"> Legend 5 </p>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default PictureCarousel;