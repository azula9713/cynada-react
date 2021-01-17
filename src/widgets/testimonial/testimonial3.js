import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import people1 from "../../assets/images/testimonial/user-1.jpg";
import people2 from "../../assets/images/testimonial/user-2.jpg";
import people3 from "../../assets/images/testimonial/user-3.jpg";
import people4 from "../../assets/images/testimonial/02.jpg";
window.fn = OwlCarousel;

class Testimonial3 extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col">
              <OwlCarousel
                className="owl-carousel no-pb owl-2"
                dotData={false}
                nav={true}
                items={1}
                autoplay={true}
                dots={false}
                loop={true}
              >
                <div className="item">
                  <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-10 col-lg-8">
                      <div className="card bg-transparent border-0">
                        <div>
                          <img
                            alt="client"
                            src={people1}
                            width="75px"
                            className="shadow-primary img-fluid rounded-circle d-inline"
                          />
                        </div>
                        <div className="card-body p-0 mt-5">
                          <q>
                            Cynada is a highly skilled and creative team. They
                            delivered us exactly what we asked for and even went
                            further in detailng the product. We are looking
                            forward to the next collaboration!
                          </q>
                          <div>
                            <h5 className="text-primary d-inline">
                              Kushith Gaveesha
                            </h5>
                            <br></br>
                            <small className="text-muted font-italic">
                              Pegasus VFX
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-10 col-lg-8">
                      <div className="card bg-transparent border-0">
                        <div>
                          <img
                            alt="client"
                            width="75px"
                            src={people2}
                            className="shadow-primary img-fluid rounded-circle d-inline"
                          />
                        </div>
                        <div className="card-body p-0 mt-5">
                          <q>
                            It was a nice experiene to work with Cynada to get
                            our agency website done. I have been impressed by
                            their Project Management as well as their agile web
                            development approach.
                          </q>
                          <div>
                            <h5 className="text-primary d-inline">
                              Rasanjana Deshan
                            </h5>
                            <br></br>
                            <small className="text-muted font-italic">
                              Aghanims Solutions
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-10 col-lg-8">
                      <div className="card bg-transparent border-0">
                        <div>
                          <img
                            alt="client"
                            width="75px !important"
                            src={people3}
                            className="shadow-primary img-fluid rounded-circle d-inline"
                          />
                        </div>
                        <div className="card-body p-0 mt-5">
                          <q>
                            It was a pleasure working with Cynada. Thanks to
                            their knowledge and determination my website looks
                            great and functions really good.
                          </q>
                          <div>
                            <h5 className="text-primary d-inline">
                              Pinipa Dewanmini
                            </h5>
                            <br></br>
                            <small className="text-muted font-italic">
                              Chocosprinkle
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonial3;
