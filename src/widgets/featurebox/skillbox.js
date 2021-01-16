import React, { Component } from "react";
import skills from "../../assets/images/about/06.png";
import mobile from "../../assets/images/icon/mobile.svg";
import seo from "../../assets/images/icon/seo.svg";
import uiux from "../../assets/images/icon/ui.svg";
import business from "../../assets/images/icon/business.svg";
import webdev from "../../assets/images/icon/webdev.svg";
import wordpress from "../../assets/images/icon/wordpress.svg";

class Skillbox extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-lg-5 col-xl-5 mb-8 mb-lg-0 order-lg-1">
              <img src={skills} alt="services" className="img-fluid" />
            </div>
            <div className="col-12 col-lg-7 col-xl-6">
              <div className="mb-8">
                <h2 className="font-w-6 text-green">Our Services</h2>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="mr-3 p-3 border rounded border-light shadow-primary">
                      <img
                        className="img-fluid"
                        src={mobile}
                        alt=""
                        width="50px"
                      />
                    </div>
                    <div>
                      <h5 className="mb-3 text-primary">
                        Mobile App Development
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mt-6 mt-md-0">
                  <div className="d-flex align-items-start">
                    <div className="mr-3 p-3 border rounded border-light shadow-primary">
                      <img
                        className="img-fluid"
                        src={seo}
                        alt=""
                        width="50px"
                      />
                    </div>
                    <div>
                      <h5 className="mb-3 text-primary">
                        SEO Tools And Marketing
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mt-6">
                  <div className="d-flex align-items-start">
                    <div className="mr-3 p-3 border rounded border-light shadow-primary">
                      <img
                        className="img-fluid"
                        src={uiux}
                        alt=""
                        width="50px"
                      />
                    </div>
                    <div>
                      <h5 className="mb-3 text-primary">UI/UX Development</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mt-6">
                  <div className="d-flex align-items-start">
                    <div className="mr-3 p-3 border rounded border-light shadow-primary">
                      <img
                        className="img-fluid"
                        src={business}
                        alt=""
                        width="50px"
                      />
                    </div>
                    <div>
                      <h5 className="mb-3 text-primary">Business IT Solutions</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mt-6">
                  <div className="d-flex align-items-start">
                    <div className="mr-3 p-3 border rounded border-light shadow-primary">
                      <img
                        className="img-fluid"
                        src={webdev}
                        alt=""
                        width="50px"
                      />
                    </div>
                    <div>
                      <h5 className="mb-3 text-primary">Website Development</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mt-6">
                  <div className="d-flex align-items-start">
                    <div className="mr-3 p-3 border rounded border-light shadow-primary">
                      <img
                        className="img-fluid"
                        src={wordpress}
                        alt=""
                        width="50px"
                      />
                    </div>
                    <div>
                      <h5 className="mb-3 text-primary">Wordpress Development</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skillbox;
