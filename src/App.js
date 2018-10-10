import React, { Component } from "react";
import Nav from "./Component/Nav/Nav.js";
import Carousel from "./Component/Carousel/Carousel.js";
import ribbon from "./Component/ribbon/Ribbon.js";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import Navigation from "./Component/Navigation/Navigation.js";
class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation/>
        <Nav name="BHUTANESE COMMUNITY OF GREATER RICHMOND (BCGR)-VA" />
        
        <Footer>

        </Footer>

      </div>
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