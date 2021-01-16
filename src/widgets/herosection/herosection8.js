import React, { Component } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
window.fn = OwlCarousel;


class Herosection8 extends Component {
  render() {
    return (
      <div className="row align-items-center">
        {/* <div className="col-12 col-lg-5 col-xl-6 order-lg-2 mb-8 mb-lg-0">
        
          <img
            src="../../assets/images/hero/girlbg.jpg"
            className="img-fluid"
            alt="..."
          />
        </div> */}
        <div className="col-12 col-lg-7 col-xl-6 order-lg-1">
          <OwlCarousel
            className="owl-carousel no-pb"
            dotData={false}
            items={1}
            autoplay={true}
            margin={30}
            dots={false}
            loop={true}
          >
            <div className="item">
              {/* Heading */}
              <h1 className="display-4 font-w-6">
                Delivering <span className="text-primary">Next-Gen</span>{" "}
                Solutions
              </h1>
              {/* Text */}
              <p className="lead text-muted">
                Build a Beautiful, Clean &amp; Modern Design website with
                flexible Bootstrap components.
              </p>
              {/* Buttons */}{" "}
              <Link to="/" className="btn btn-primary shadow mr-1">
                Contact Us
              </Link>
              <Link to="/" className="btn btn-outline-primary">
                Get Started
              </Link>
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Herosection8;
