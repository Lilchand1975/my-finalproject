import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./navigation.css";

const Navigation = () => (
  <Router >
    <div className="navContainTab">
      <div> <ul className="navTab">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
        <li>
          <Link to="/support">Contact</Link>
        </li>
        <li>
          <Link to="/support">BoardMembers</Link>
        </li>
        <li>
            <div className="search">
            <input type="text" placeholder="Search.." name= "search"></input>
            </div>
        </li>
      </ul>
      </div>
     
      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/support" component={Support} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2></h2>
  </div>
);

const About = () => (
  <div>
    <h2>Put here something about "About"</h2>
  </div>
);

const Services = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:serviceId`} component={Services} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Support = ({ match }) => (
    <div>
        <ul>
            <li>
                <Link to={`${match.url}/Donate Us`}>Donate us</Link>
            </li>
        <li>
             <Link to={`${match.url}/Intern With Us`}>Intern with us</Link>
        </li>
        <ul/>
     </ul>
 </div>
       
);

export default Navigation;