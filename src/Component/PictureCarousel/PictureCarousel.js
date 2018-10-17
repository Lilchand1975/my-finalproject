import React, { Component } from "react";
import esl from "../Images/esl.png";
import esl2 from "../Images/esl2.jpg";
import image from "../Images/image.jpg";
import lhosar from "../Images/lhosar.jpg";
import teej from "../Images/teej.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Route } from "react-router-dom";
import "./PictureCarousel.css";

class PictureCarousel extends Component {
  state = {
    slideIndex: 0,
    slide: true,
    interval: 500,
    infiniteLoop: true
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
      <div>
        <div className="row">
          <div ClassName="col-sm-3" id="card">
            <div className="adv">
              <h4 className="ads">Advertisement:</h4>
            </div>
            <div className="rimach">
              <p className="store">
                <strong> Suva Laxmi store </strong>
              </p>
              <p className="sls">
                {" "}
                <em>Address:</em>
                1423 Blue Jay Lane{" "}
              </p>
              <p className="sls"> Richmond, VA 23229</p>
              <p className="sls">
                <em>Phone</em> (804)-781-7649
              </p>
            </div>

            <div className="aps">
              <p className="store">
                <strong> Apex Homecare Services LLC </strong>
              </p>
              <p className="sls">
                {" "}
                <em>Address:</em>
                2800 N Parham Rd #100{" "}
              </p>
              <p className="sls"> Richmond, VA 23294</p>
              <p className="sls">
                <em>Phone</em> (804)-303-3567
              </p>
            </div>
          </div>
          {/* Caoursel begins here */}

          <div className="col-sm-6">
            <Carousel
              autoPlay
              infiniteLoop="true"
              slideIndex={this.state.slideIndex}
              afterSlide={slideIndex => this.setState({ slideIndex })}
              slide={this.state.slide}
              infiniteLoop={this.state.infiniteLoop}
              className="carousel"
              style={{}}
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
                <p className="legend">
                  {" "}
                  Young ladies posing on Miss. Bhutan-USA contest.{" "}
                </p>
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
                <p className="legend"> Attending community ESL class</p>
              </div>
              <div>
                <img
                  src={image}
                  style={{
                    position: "relative",
                    top: 25
                  }}
                  alt=""
                />
                <p className="legend"> RUKK in their karate training </p>
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
                <p className="legend"> Celebrating Lhosar festival </p>
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
                <p className="legend">
                  {" "}
                  Bhutanese Women Celebrating Teej festival{" "}
                </p>
              </div>
            </Carousel>
          </div>

          <div ClassName="col-sm-3" id="rt-card">
            <h4 className="ads">Advertisement:</h4>

            <div className="rimach">
              <p className="store">
                <strong> Richmond United Karate Kids (RUKK) </strong>
              </p>
              <p className="sls">
                {" "}
                <em>Address:</em>
                7926 Chowning Rd{" "}
              </p>
              <p className="sls"> Henrico, VA 23294</p>
              <p className="sls">
                <em>Phone</em> (804)-539-4975
              </p>
            </div>

            <div className="aps">
              <p className="store">
                <strong> Everest Financial Inc </strong>
              </p>
              <p className="sls">
                {" "}
                <em>Address:</em>
                1234 Servo Dr.{" "}
              </p>
              <p className="sls"> Glen Allen, VA 23060</p>
              <p className="sls">
                <em>Phone</em> (804)-982-0292
              </p>
            </div>
          </div>

          <Route
            exact
            path="/services"
            component={() => (
              <div className="row">
                <h3 className="service-section">What we do...</h3>
                <p className="service-overview">
                  Bhutanese Community of Greater Richmond (BCGR) is 501 ©
                  registered organization established to assist and support
                  newly arrived refugee families in Richmond Metro Area.
                  Organizations deliver support services such as ESL classes,
                  citizenship preparation classes, welfare benefits application,
                  driver license preparation classes etc. Organization also runs
                  a timely and routinely scheduled cultural, social, and
                  community educational events...........
                </p>
              </div>
            )}
          />
        </div>
      </div>
    );
  }
}

export default PictureCarousel;
