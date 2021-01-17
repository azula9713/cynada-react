import React, { Component } from "react";
import { Link } from "react-router-dom";
import dulan from "../../assets/images/team/speaker-1.png";
import nilesh from "../../assets/images/team/speaker-4.png";
import thanusi from "../../assets/images/team/speaker-5.png";
import thimira from "../../assets/images/team/speaker-6.png";

class Team1 extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 col-lg-3 col-md-6 mb-8 mb-lg-0">
          <div className="text-center hover-translate p-5">
            <div className="mb-3">
              <img className="img-fluid rounded-top" src={dulan} alt="" />
            </div>
            <div>
              <h6 className="mb-1">Dulan Manujaya</h6>
              <small className="text-muted mb-3 d-block">
                Cloud Architect & QA Lead Engineer
              </small>
              <small className="text-muted mb-3 d-block">
                CO-FOUNDER & CO-OWNER
              </small>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <Link className="text-muted" to="/">
                    <i className="la la-facebook h4" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="text-muted h6" to="/">
                    <i className="la la-dribbble h4" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="text-muted h6" to="/">
                    <i className="la la-twitter h4" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="text-muted h6" to="/">
                    <i className="la la-linkedin h4" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-6 mb-8 mb-lg-0">
          <div className="text-center shadow hover-translate p-5">
            <div className="mb-3">
              <img className="img-fluid rounded-top" src={nilesh} alt="" />
            </div>
            <div>
              <h6 className="mb-1">Nilesh Hemachandra</h6>
              <small className="text-muted mb-3 d-block">
                Project Manager & Mobile App Developer
              </small>
              <small className="text-muted mb-3 d-block">
                CO-FOUNDER & CO-OWNER
              </small>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <Link className="text-muted" to="/">
                    <i className="la la-facebook h4" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="text-muted h6" to="/">
                    <i className="la la-dribbble h4" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="text-muted h6" to="/">
                    <i className="la la-twitter h4" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="text-muted h6" to="/">
                    <i className="la la-linkedin h4" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-6 mb-8 mb-md-0">
          <div className="text-center hover-translate p-5">
            <div className="mb-3">
              <img className="img-fluid rounded-top" src={thanusi} alt="" />
            </div>
            <div>
              <h6 className="mb-1">Thanusi Bandara</h6>
              <small className="text-muted mb-3 d-block">
                Head of Marketing & Accounts Department
              </small>
              <small className="text-muted mb-3 d-block">
                CO-FOUNDER & CO-OWNER
              </small>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <Link className="text-muted" to="/">
                    <i className="la la-facebook h4" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="text-muted h6" to="/">
                    <i className="la la-dribbble h4" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="text-muted h6" to="/">
                    <i className="la la-twitter h4" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="text-muted h6" to="/">
                    <i className="la la-linkedin h4" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-6">
          <div className="text-center hover-translate p-5">
            <div className="mb-3">
              <img className="img-fluid rounded-top" src={thimira} alt="" />
            </div>
            <div>
              <h6 className="mb-1">Thimira Mendis</h6>
              <small className="text-muted mb-3 d-block">
                Head of Marketing & Accounts Department
              </small>
              <small className="text-muted mb-3 d-block">
                CO-FOUNDER & CO-OWNER
              </small>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <Link className="text-muted" to="/">
                    <i className="la la-facebook h4" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="text-muted h6" to="/">
                    <i className="la la-dribbble h4" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="text-muted h6" to="/">
                    <i className="la la-twitter h4" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="text-muted h6" to="/">
                    <i className="la la-linkedin h4" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team1;
