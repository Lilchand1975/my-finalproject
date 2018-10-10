
import React, { Component } from "react";
import "./footer.css"
import { Col, Container, Row, Footer } from "mdbreact";


      class FooterPage extends React.Component {
        render() {
      return (
        <Footer color="blue" className="font-small pt-4 mt-4">
          <Container fluid className="text-center text-md-left">
            <Row>
              <Col md="3">
              <h5 className="bcgr">ABOUT BCGR</h5>
                <div>Nepali speaking Bhutanese started immigrating to RVA since early 2008. In early 2009, community reliazed the need of a an organization to provide support and assistance to meet the needs of new immigrated refugee family. With few member from the community, an organization brought into live which we now know as BCGR. </div>
                  
              </Col>
              <Col md="3">
              <h5 className="abt-us">ABOUT US</h5>
                <p>
                  Nepali speaking Bhutanes started setteling in RVA since early 2008.
                </p>
              </Col>
              <Col md="3">
              <h5 className="link-title">Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Future Event</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Past Event</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">ELS Classes</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Citizehship Classes</a>
                </li>
              </ul>
              </Col>
              <Col md="3">
              <h5 className="affliate-btn">AFFILIATES</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Buddhist Association of Richmond</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Bhutanese Christian Community</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">DOJO Karate</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Richmond UFC</a>
                </li>
              </ul>
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

