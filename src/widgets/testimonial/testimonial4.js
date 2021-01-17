import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';  
import people1 from "../../assets/images/testimonial/user-1.jpg";
import people2 from "../../assets/images/testimonial/user-2.jpg";
import people3 from "../../assets/images/testimonial/user-3.jpg";
import people4 from "../../assets/images/testimonial/02.jpg";
window.fn = OwlCarousel;

class Testimonial4 extends Component {
    render() {
        return (
            <div className="row justify-content-center text-center">
            <div className="col">
              {/* <div className="owl-carousel no-pb owl-2" data-dots="false" data-nav="true" data-items={1} data-autoplay="true"> */}
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
                          <img alt="client" src={people1} className="shadow-primary img-fluid rounded-circle d-inline" />
                        </div>
                        <div className="card-body p-0 mt-5">
                          <p className="lead font-w-5">Cynada Amazing Landing Page All-in-one, clean code, Crative &amp; Modern design. We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                          <div>
                            <h5 className="text-primary d-inline mb-0">Romi Jensen</h5>
                            <small className="text-muted font-w-5 font-italic">- Founder</small>
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
                          <img alt="client" src={people1} className="shadow-primary img-fluid rounded-circle d-inline" />
                        </div>
                        <div className="card-body p-0 mt-5">
                          <p className="lead font-w-5">Cynada Amazing Landing Page All-in-one, clean code, Crative &amp; Modern design. We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                          <div>
                            <h5 className="text-primary d-inline mb-0">Johny Stock</h5>
                            <small className="text-muted font-w-5 font-italic">- Supervisor</small>
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
                          <img alt="client" src={people1} className="shadow-primary img-fluid rounded-circle d-inline" />
                        </div>
                        <div className="card-body p-0 mt-5">
                          <p className="lead font-w-5">Cynada Amazing Landing Page All-in-one, clean code, Crative &amp; Modern design. We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                          <div>
                            <h5 className="text-primary d-inline mb-0">Leeny Biton</h5>
                            <small className="text-muted font-w-5 font-italic">- Manager</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
       
             
        );
    }
}

export default Testimonial4;