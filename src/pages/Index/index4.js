import React, { Component } from "react";
import Herosection3 from "../../widgets/herosection/herosection3";
import Header3 from "../../layout/header/header3";
import Experience from "../../widgets/featurebox/experience";
import Skillbox from "../../widgets/featurebox/skillbox";
import Clientlogo from "../../widgets/common/clientlogo";
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
      </div>
    );
  }
}

export default Index4;
