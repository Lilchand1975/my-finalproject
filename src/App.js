import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./Component/Nav/Nav.js";
import Ribbon from "./Component/Ribbon/Ribbon.js";
import PictureCarousel from "./Component/PictureCarousel/PictureCarousel.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Component/Footer";
import Navigation from "./Component/Navigation/Navigation.js";
// import Card from "./Component/Card/Card";

import Form from "./Component/Form/Form";
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navigation />
        <Nav name="BHUTANESE COMMUNITY OF GREATER RICHMOND (BCGR)-VA" />
        <div className="wrapper">
        <Ribbon branding="button" />
        <Route exact path="/registration" component={(props) => <Form {...props} />} />
        <Route exact path="/" component={(props) => <PictureCarousel {...props} />} />
        <Route exact path="/history" component={(props) => <PictureCarousel {...props} />} />
        
        </div>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;


