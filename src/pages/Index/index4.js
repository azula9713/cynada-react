import React, { Component } from "react";
import Herosection3 from "../../widgets/herosection/herosection3";
import Header3 from "../../layout/header/header3";
import Experience from "../../widgets/featurebox/experience";
import Skillbox from "../../widgets/featurebox/skillbox";
import Clientlogo from "../../widgets/common/clientlogo";
import Testimonial1 from "../../widgets/testimonial/testimonial1";
import FeatureServices from "../../widgets/featurebox/services";
import Team1 from "../../widgets/team/team1";
import Pricingplan1 from "../../widgets/pricingplan/pricingplan1";
import Blog2 from "../../widgets/blog/blog2";
import Counter4 from "../../widgets/counter/counter4";

class Index4 extends Component {
  // constructor(props)
  // {
  //     super(props)
  // }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Header3 />
        <Herosection3 />
        <Experience />
        <section>
          <div className="container">
            <div id="clientslider" className="row">
              <div className="col-12">
                <Clientlogo logoitems={6} />
              </div>
            </div>
          </div>
        </section>
        <Skillbox />
        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-12 col-lg-4 mb-6 mb-lg-0">
                <div>
                  {" "}
                  <span className="badge badge-light-soft p-2">
                    <i className="la la-users ic-3x rotation" />
                  </span>
                  <h2 className="mt-4 text-green font-w-6">
                    What do our clients say about us
                  </h2>
                </div>
              </div>
              <Testimonial1 />
            </div>
            {/* / .row */}
          </div>
        </section>
      </div>
    );
  }
}

export default Index4;
