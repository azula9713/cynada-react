import React, { Component } from "react";
import CommingSoonCounter from "../../../widgets/common/counter";
import Header3 from "../../../layout/header/header3";
import Footer from "../../../layout/footer/footer";

class ComingSoon extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Header3 />
        <div className="page-content">
          {/*coming soon start*/}
          <section
            className="fullscreen-banner p-0 o-hidden bg-pos-r"
            id="comingsoon"
          >
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            <div className="container-fluid px-md-8 h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12">
                  <div
                    className="shadow p-5 rounded"
                    data-bg-color="rgba(255,255,255,0.2)"
                  >
                    <div className="row justify-content-between">
                      <div className="col-lg-5 col-md-12">
                        <div className="coming-soon">
                          <h1 className="mt-4 mb-2 font-w-7 text-white">Coming Soon</h1>
                          <p className="text-white">
                            We Are Creatinig Something Awesome And Exciting For
                            You
                          </p>
                          <ul
                            className="countdown list-inline d-flex justify-content-between"
                            data-countdown="2020/03/23"
                          />
                          <CommingSoonCounter time={"100150"} />
                          <div>
                            <h4 className="title z-index-1 mb-4">
                              Subscribe to get notified!
                            </h4>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="subscribe-form">
                                  <form id="mc-form" className="group">
                                    <input
                                      defaultValue
                                      name="EMAIL"
                                      className="email form-control"
                                      id="mc-email"
                                      placeholder="Email Address"
                                      required
                                      style={{ height: "60px" }}
                                      type="email"
                                    />
                                    <input
                                      className="btn btn-primary btn-block mt-3 mb-2"
                                      name="subscribe"
                                      defaultValue="Subscribe"
                                      type="submit"
                                    />
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 md-mt-5 text-lg-right">
                        <img
                          className="img-fluid d-inline"
                          src={require(`../../../assets/images/coming-soon-img.png`)}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*coming soon end*/}
        </div>
        <section>
          <div className="container">
            <div className="col-12 col-md-12 col-lg-4 mb-6 mb-lg-0">
              <div>
                {" "}
                <span className="badge badge-light-soft p-2">
                  <i className="la la-users ic-3x rotation" />
                </span>
                <h2 className="mt-4 text-green font-w-6">Reach us</h2>
              </div>
            </div>
            <br></br>
            <div className="row text-center">
              <div className="col-lg-4 col-md-12">
                <div>
                  <svg
                    className="feather feather-map-pin"
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1360ef"
                    strokeWidth={1}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx={12} cy={10} r={3} />
                  </svg>
                  <h4 className="mt-5 text-primary">Address:</h4>
                  <span className="text-green">
                    No. 52, 5th Lane, Sarabumi Housing,
                  </span>
                  <br></br>
                  <span className="text-green">
                    Batakettara, Piliyandala 10300 Sri Lanka
                  </span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <svg
                    className="feather feather-mail"
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1360ef"
                    strokeWidth={1}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <h4 className="mt-5 text-primary">Email Us</h4>
                  <a href="mailto:info@cynada.com" className="text-green">
                    {" "}
                    info@cynada.com
                  </a>
                  <br></br>
                  <a
                    href="mailto:cynadasolutions@gmail.com"
                    className="text-green"
                  >
                    {" "}
                    cynadasolutions@gmail.com
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div>
                  <svg
                    className="feather feather-phone-call"
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1360ef"
                    strokeWidth={1}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <h4 className="text-primary mt-5">Phone Number</h4>
                  <a href="tel:+94762971382" className="text-green">
                    +94762971382
                  </a>{" "}
                  <br></br>
                  <a href="tel:+94762971399" className="text-green">
                    +94762971399
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default ComingSoon;
