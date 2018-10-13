import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./Component/Nav/Nav.js";
import Ribbon from "./Component/Ribbon/Ribbon.js";
import Carousel from "./Component/Carousel/Carousel.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import Navigation from "./Component/Navigation/Navigation.js";
import Card from "./Component/Card/Card";
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navigation />
        <Nav name="BHUTANESE COMMUNITY OF GREATER RICHMOND (BCGR)-VA" />
        <div className="wrapper">
          <Ribbon branding="button" />
          <Carousel />
        </div>
        <Footer />

      </div>
      </Router>
    );
  }
}

export default App;


// onst Header = ({title}) => (<header>{title}</header>);
// const Main = ({title}) => (<main>{title}</main>);
// const Footer = ({title}) => (<footer>{title}</footer>);

// class App extends React.Component {
//   render() {
//     const {header,main,footer} = this.props;
//     return (
//       <div className="app">
//         <Header title={header} />
//         <Main title={main} />
//         <Footer title={footer}/>
//       </div>
//     );
//   }
// };

// ReactDOM.render(
//   <App 
//     header="I am the header" 
//     main="I am the main" 
//     footer="I am the footer" />, 
//   document.getElementById('react')
// );