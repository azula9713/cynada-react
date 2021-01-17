import React, { Component } from "react";
import Memberaboutus1 from "../../../widgets/aboutus/aboutus1";
import BrandLogo from "../../../assets/images/cynada.png";
import Team1 from "../../../widgets/team/team1";
import AccordionDemo from "../../../widgets/featuare/accordiondemo";
import Counter2 from "../../../widgets/counter/counter2";
import Pageheading from "../../../widgets/Pageheading";

class Aboutus2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <section className="position-relative">
          <Pageheading title={"About Us"} />
        </section>
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          {/*about start*/}
          <Memberaboutus1 />
          {/*about end*/}
          <section className="text-center">
            <div className="container">
              <img alt="logo" src={BrandLogo} width="300px" />
            </div>
          </section>
          {/*counter start*/}
          <section>
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-12 col-lg-6 col-xl-5">
                  <AccordionDemo />
                </div>
                <div className="col-12 col-lg-6 mb-8 mb-lg-0">
                  <Counter2 />
                </div>
              </div>
            </div>
          </section>
          {/*counter end*/}
          {/*team start*/}
          <section className="pt-0">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                  <div className="mb-8">
                    {" "}
                    <span className="badge badge-primary-soft p-2 font-w-6">
                      Cynada Team
                    </span>
                    <h2 className="mt-3 text-green">
                      Meet The Minds Behind Cynada
                    </h2>
                  </div>
                </div>
              </div>
              <Team1 />
            </div>
          </section>
          {/*team end*/}
          {/*client start*/}

          {/*client end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default Aboutus2;
