import React, { Component } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import idea from "../../assets/images/icon/idea.svg"
import trend from "../../assets/images/icon/trend.svg"
import directions from "../../assets/images/icon/directions.svg"
import regulation from "../../assets/images/icon/regulation.svg"

AOS.init();

class Experience extends Component {
  render() {
    return (
      <section>
        <div className="container" data-aos="fade-left">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-lg-6 mb-8 mb-lg-0 order-lg-1">
              <div className="d-flex justify-content-between mb-5">
                <div className="mr-3">
                <img src={idea} alt="idea" width="75px"/>
                </div>
                <div>
                  <h5 className="mb-2">Creative Design</h5>
                  <p className="mb-0">
                    Cynada is built with key fundamental concepts in mind,
                    including creativity, productivity and efficiency.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between mb-5">
                <div className="mr-3">
                <img src={trend} alt="idea" width="75px"/>
                </div>
                <div>
                  <h5 className="mb-2">Modern & Up-to-date</h5>
                  <p className="mb-0">
                    As we stays with the latest technologies, you do not have to
                    worry about getting the newest for your service.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between  mb-5">
                <div className="mr-3">
                <img src={directions} alt="idea" width="75px"/>
                </div>
                <div>
                  <h5 className="mb-2">Availability</h5>
                  <p className="mb-0">
                    We got you covered no matter what your software requirement
                    is. All you need to have is a beautiful idea.
                  </p>
                </div>
              </div>
              <div  className="d-flex justify-content-between">
                <div className="mr-3">
                  <img src={regulation} alt="idea" width="75px"/>
                </div>
                <div>
                  <h5 className="mb-2">Fully Guidance</h5>
                  <p className="mb-0">
                    Not sure where to begin? Stop worrying and let's discuss,
                    we’ll help you get grip of it all and make your idea a
                    reality.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-5">
              <div>
                {" "}
                <h2 className="mt-3 text-green font-w-5">
                  EVERYTHING THAT MATTERS TO YOU
                </h2>
                <p className="lead mb-0">
                  Great ideas are born where creativity and data collide. We at
                  Cynada always wants to create unique and remarkable product
                  that can satify the people's needs.
                </p>
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
