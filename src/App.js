import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
            <Route
              exact
              path="/registration"
              component={props => <Form {...props} />}
            />
            <Route
              exact
              path="/"
              component={props => <PictureCarousel {...props} />}
            />
            <Route
              exact
              path="/history"
              component={props => <PictureCarousel {...props} />}
            />
            <Route
              exact
              path="/contact"
              component={() => (
                <div className="container form-wrapper">
                  <div className="row" id="bdr">
                    <div className="col-md-5">
                      <h4 id="cnts"> Contact us:</h4>
                      <li>9633 Maelee Mews</li>
                      <li>Glen Allen, VA 23060</li>
                      <i class="fa">&#xf1ac;</i> (999) 999-9999
                    </div>
                    <div className="col-md-6">
                      <form className="form">
                        <div className="form-group">
                          <label for="exampleFormControlInput1">
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                          />
                        </div>
                        <div className="form-group">
                          <label for="exampleFormControlSelect1">
                            How you describe your involvment with BCGR?
                          </label>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                          >
                            <option>As Community member</option>
                            <option>Aa a volunteer</option>
                            <option>Well wisher</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label for="exampleFormControlTextarea1">
                            Insert your concerns here
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                          />
                        </div>
                      </form>
                      <button class="btn btn-primary" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              )}
            />
            {/* <Route
              exact
              path="/contact"
              component={props => <PictureCarousel {...props} />}
            /> */}
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
