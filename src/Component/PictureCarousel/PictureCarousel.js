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
    interval: 500,
    infiniteLoop: true,
   
  };

  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.autoplay = true;
    this.interval = 200;
  }

  play() {
    this.slider.play();
  }


  render() {
    return (
      <div className="row">
        <div ClassName="col-sm-3" id="card">
          <h4 className="ads">Advertisement:</h4>
          <ul>
            <br />
            <li> Suva Laxmi store </li>
            <br />
            <li> Apex Care Link </li>
          </ul>
        </div>
        {/* Caoursel begins here */}

        <div className="col-sm-6">
          <Carousel autoPlay infiniteLoop="true"
            slideIndex={this.state.slideIndex}
            afterSlide={slideIndex => this.setState({ slideIndex })}
            slide={this.state.slide}
            
            infiniteLoop={this.state.infiniteLoop}
            className="carousel"
            style={{
        
            }}
          >
          

            <div>
              <img
                src={esl}
                alt=""
                style={{
                  position: "relative",
                  top: 20
                }}
              />
              <p className="legend"> Legend 1 </p>
            </div>
            <div>
              <img
                src={esl2}
                alt=""
                style={{
                  position: "relative",
                  top: 0
                }}
              />
              <p className="legend"> Legend 2 </p>
            </div>
            <div>
              <img src={image} style={{
                position: "relative",
                top: 25
              }} 
              alt="" 
              />
              <p className="legend"> Legend 3 </p>
            </div>
            <div>
              <img
                style={{
                  position: "relative",
                  top: 75
                }} 
                src={lhosar} 
                alt=""
                
              />
              <p className="legend"> Legend 4 </p>
            </div>
            <div>
              <img
                style={{
                  position: "relative",
                  top: 80
                }} 
                src={teej}
                alt="" 
              />
              <p className="legend"> Legend 5 </p>
            </div>
          </Carousel>
        </div>
        <div ClassName="col-sm-3" id="card">
          <h4 className="ads">Advertisement:</h4>
          <ul>
            <br />
            <li> Richmond Karate Kids </li>
            <br />
            <li> Everest Financial </li>
            <br />
          </ul>
        </div>
      </div>
    );
  }
}

export default PictureCarousel;
