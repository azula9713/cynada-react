/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import logo from "../../assets/images/app/cynadawhite.png";

class Footer extends Component {
  render() {
    return (
      <footer
        className="py-11 bg-primary position-relative"
        data-bg-img="assets/images/bg/03.png"
      >
        <div
          className="shape-1"
          style={{ height: "150px", overflow: "hidden" }}
        >
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
              style={{ stroke: "none", fill: "#fff" }}
            />
          </svg>
        </div>
        <Container className=" mt-11">
          <Row className="footercontent">
            <div className="col-12 col-lg-6 col-xl-7">
              <Row>
                <Col className="col-12 col-sm-4 navbar-dark">
                  <h5 className="mb-4 text-white">Useful Links</h5>
                  <ul className="navbar-nav list-unstyled mb-0">
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="/about-us">
                        About
                      </Link>
                    </li>
                    {/* <li className="mb-3 nav-item">
                      <Link className="nav-link" to="/product-grid">
                        Shop
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="/faq">
                        Faq
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="/blog-card">
                        Blogs
                      </Link>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact-us">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col className="col-12 col-sm-4 mt-6 mt-sm-0 navbar-dark">
                  <h5 className="mb-4 text-white">Services</h5>
                  <ul className="navbar-nav list-unstyled mb-0">
                    {/* <li className="mb-3 nav-item">
                      <Link className="nav-link" to="#">
                        Content Writing
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="#">
                        Documentation
                      </Link>
                    </li> */}
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="/sign-in">
                        Account
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/career">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col className="col-12 col-sm-4 mt-6 mt-sm-0 navbar-dark">
                  <h5 className="mb-4 text-white">Legal</h5>
                  <ul className="navbar-nav list-unstyled mb-0">
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="/term-condition">
                        Term Of Service
                      </Link>
                    </li>
                    <li className="mb-3 nav-item">
                      <Link className="nav-link" to="/privacy-policy">
                        Privacy Policy
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link className="nav-link" to="#">
                        Support
                      </Link>
                    </li> */}
                  </ul>
                </Col>
              </Row>
              <Row id="footericons" className="mt-5">
                <Col className="col-12 col-sm-6">
                  <Link className="footer-logo text-white h2 mb-0" to="/">
                    <img alt="logo" width="150px" src={logo} />
                  </Link>
                </Col>
                <Col className="col-12 col-sm-6 mt-6 mt-sm-0">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a
                        className="text-light ic-2x"
                        href="https://www.facebook.com/cynadasoftware"
                        target="_blank"
                      >
                        <i className="la la-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-light ic-2x" href="#">
                        <i className="la la-dribbble" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="text-light ic-2x"
                        href="https://www.instagram.com/cynada_solutions"
                        target="_blank"
                      >
                        <i className="la la-instagram" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-light ic-2x" href="#">
                        <i className="la la-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="text-light ic-2x"
                        href="https://www.linkedin.com/company/cynada"
                        target="_blank"
                      >
                        <i className="la la-linkedin" />
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Row>
          <Row className="text-white text-center mt-8">
            <Col>
              <hr className="mb-8" />
              Copyright 2021 Cynada (Private) Limited | All Rights Reserved
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
