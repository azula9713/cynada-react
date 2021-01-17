import React, { Component } from "react";
import cynada from "../../assets/images/about/10.jpg";
import cynada2 from "../../assets/images/about/12.jpg";
import cynada3 from "../../assets/images/about/13.jpg";

class Memberaboutus1 extends Component {
  render() {
    return (
      <section className="pb-11">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-lg-6 mb-6 mb-lg-0">
              <div className="row align-items-center">
                <div className="col-6">
                  <img
                    src={cynada}
                    className="img-fluid rounded shadow-lg"
                    alt="..."
                  />
                </div>
                <div className="col-6">
                  <img
                    src={cynada2}
                    className="img-fluid rounded shadow-lg mb-5"
                    alt="..."
                  />
                  <img
                    src={cynada3}
                    className="img-fluid rounded shadow-lg"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-5">
              <div>
                {" "}
                <span className="badge badge-primary-soft p-2 font-w-6">
                  About Cynada
                </span>
                <h2 className="mt-3 font-w-5">
                  Cynada, Small Team Crafting Beautiful Experience
                </h2>
                <p className="lead">
                  We at Cynada always tend to deliver a service that our client
                  appreciate and feel satisfied. With the combination of modern
                  technologies and data-driven situational decisions will
                  consistently deliver the best outcome for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Memberaboutus1;
