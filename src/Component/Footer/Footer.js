
import React, { Component } from "react";
import "./footer.css"
import { Col, Container, Row, Footer } from "mdbreact";


const Message = ({ readMore, toggleReadMore }) => (
  readMore ?
    <div><div>Nepali speaking Bhutanese started immigrating to RVA since early 2008. In early 2009, community reliazed the need of a an organization to provide support and assistance to meet the needs of new immigrated refugee family. With few member from the community, an organization brought into live which we now know as BCGR.</div><p style={{ cursor: "pointer", fontWeight: "bold"}} onClick={toggleReadMore}>Read Less</p></div>
    : <div><div>Nepali speaking Bhutanese started immigrating to RVA since early 2008. In early 2009, community reliazed the need...</div><p style={{ cursor: "pointer", fontWeight: "bold"}} onClick={toggleReadMore}>Read More</p></div>
);

const History = ({ More, toggleMore }) => (
  More ?
    <div><div>Nepali speaking Bhutanese started immigrating to RVA since early 2008. In early 2009, community reliazed the need of a an organization to provide support and assistance to meet the needs of new immigrated refugee family. With few member from the community, an organization brought into live which we now know as BCGR.</div><p style={{ cursor: "pointer", fontWeight: "bold",color: "yellow"}} onClick={toggleMore}>Read Less</p></div>
    : <div><div>Nepali speaking Bhutanese started immigrating to RVA since early 2008. In early 2009, community reliazed the need...</div><p style={{ cursor: "pointer", fontWeight: "bold", color: "yellow"}} onClick={toggleMore}>Read More</p></div>
)

class FooterPage extends React.Component {

  state = {
    readMore: false

  };
  state = {
    More: false

  };

  toggleReadMore = () => {
    console.log("called toggleReadMore")
    this.setState({ readMore: !this.state.readMore });
  }

  toggleMore = () => {
    console.log("called toggleMore")
    this.setState({ More: !this.state.More });
  }


  render() {
    return (
      <Footer color="blue" className="font-small">
        <Container fluid className="text-center text-md-left">
          <Row>
            <Col md="3">
              <h5 className="bcgr">ABOUT BCGR</h5>
              <Message readMore={this.state.readMore} toggleReadMore={this.toggleReadMore} />

            </Col>
            <Col md="3">
              <h5 className="abt-us">ABOUT US</h5>
              <History More={this.state.More} 
              toggleMore={this.toggleMore} />
            </Col>
            <Col md="1" />    
            <Col md="2">
              <h5 className="link-title">LINKS</h5>
              <ol id="list">
                <li><a href="#">Future Event</a> </li>
                <li> <a href="#">PastE vent</a></li>
                <li><a href="#">ELS Classes</a></li>
                <li><a href="#">Citizehship Classes</a></li>
              </ol>
            </Col>
            <Col md="3">
              <h5 className="affliate-btn">OUR AFFILIATES</h5>
              <ol id="list">
                <li><a href="#!">Buddhist Association of Richmond</a> </li>
                <li><a href="#!">Bhutanese Christian Community</a> </li>
                <li> <a href="#!">DOJO Karate</a></li>
                <li> <a href="#!">Richmond UFC</a></li>
              </ol>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="#"> Bhutanese Community of Greater Richmond </a>
            <div><a> Developed by Laxman C & Chandra C</a></div>
          </Container>
        </div>
      </Footer>
    );
  }
}



export default FooterPage;

