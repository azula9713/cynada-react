import React, { Component } from "react";
import people1 from "../../assets/images/testimonial/01.jpg"
import people2 from "../../assets/images/testimonial/02.jpg"
import people3 from "../../assets/images/testimonial/03.jpg"
import people4 from "../../assets/images/testimonial/03.jpg"

class Testimonial1 extends Component {
  render() {
    return (
      <div className="col-12 col-md-12 col-lg-8">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="card p-4 shadow border-0 flex-sm-row">
              <div className="w-50 mr-sm-5 mb-3 mb-sm-0">
                <img
                  alt="Image"
                  src={people1}
                  className="shadow-primary img-fluid rounded-circle d-inline"
                />
              </div>
              <div className="card-body p-0">
                <q>
                  Cynada is a highly skilled and creative team. They delivered
                  us exactly what we asked for and even went further in detailng
                  the product. We are looking forward to the next collaboration!
                </q>
                <div>
                  <h5 className="text-primary d-inline">Kushith Gaveesha</h5>
                  <small className="text-muted font-italic">Pegasus VFX</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 mt-5">
            <div className="card p-4 shadow border-0 flex-sm-row">
              <div className="w-50 mr-sm-5 mb-3 mb-sm-0">
                <img
                  alt="Image"
                  src={people2}
                  className="shadow-primary img-fluid rounded-circle d-inline"
                />
              </div>
              <div className="card-body p-0">
                <q>
                  It was a nice experiene to work with Cynada to get our agency
                  website done. I have been impressed by their Project
                  Management as well as their agile web development approach.
                </q>
                <div>
                  <h5 className="text-primary d-inline">Rasanjana Deshan</h5>
                  <small className="text-muted font-italic">
                    Aghanims Solutions
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 mt-5 mt-md-0">
            <div className="card p-4 shadow border-0 flex-sm-row">
              <div className="w-50 mr-sm-5 mb-3 mb-sm-0">
                <img
                  alt="Image"
                  src={people3}
                  className="shadow-primary img-fluid rounded-circle d-inline"
                />
              </div>
              <div className="card-body p-0">
                <q>
                  It was a pleasure working with Cynada. Thanks to their
                  knowledge and determination my website looks great and
                  functions really good.
                </q>
                <div>
                  <h5 className="text-primary d-inline">Pinipa Dewanmini</h5>
                  <small className="text-muted font-italic">
                    Chocosprinkle
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 mt-5">
            <div className="card p-4 shadow border-0 flex-sm-row">
              <div className="w-50 mr-sm-5 mb-3 mb-sm-0">
                <img
                  alt="Image"
                  src={people4}
                  className="shadow-primary img-fluid rounded-circle d-inline"
                />
              </div>
              <div className="card-body p-0">
                <q>
                  Cynada is amazing at what they do. Their customized POS system
                  is clean creative &amp; Modern design, also full with
                  necessary functions.
                </q>
                <div>
                  <h5 className="text-primary d-inline">Suharsha Perera</h5>
                  <small className="text-muted font-italic">
                    Furniture Mart
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* / .row */}
      </div>
    );
  }
}

export default Testimonial1;
