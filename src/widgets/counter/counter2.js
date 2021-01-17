import React, { Component } from "react";
import CountUp from "react-countup";

class Counter2 extends Component {
  render() {
    return (
      <div className="row text-center">
        <div className="col-lg-6 col-md-6">
          <div className="counter bg-primary rounded p-5 shadow">
            <div className="counter-desc text-white">
              <h5>Projects</h5>
              <CountUp
                className="count-number display-4"
                end={17}
                duration={16}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 mt-5">
          <div className="counter bg-white rounded p-5 shadow">
            <div className="counter-desc">
              <h5>Partners</h5>
              <CountUp
                className="count-number display-4 text-primary"
                end={6}
                duration={16}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 mt-5 mt-md-0">
          <div className="counter bg-white rounded p-5 shadow">
            <div className="counter-desc">
              <h5>Clients</h5>
              <CountUp
                className="count-number display-4 text-primary"
                end={12}
                duration={16}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 mt-5">
          <div className="counter bg-orange rounded p-5 shadow">
            <div className="counter-desc text-white">
              <h5>Code Lines</h5>
              <CountUp
                className="count-number display-4"
                end={528568}
                duration={16}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter2;
