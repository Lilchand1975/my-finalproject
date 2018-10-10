import React, { Component } from "react";
import Nav from "./Component/Nav/Nav.js";
import Ribbon from "./Component/Ribbon/Ribbon.js";
import Carousel from "./Component/Carousel/Carousel.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Ribbon branding="button" />
        <Carousel />
      </div>
    );
  }
}

export default App;
