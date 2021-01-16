import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import aghanims from "../../assets/images/client/Clients/aghanims1.png";
import ceylon from "../../assets/images/client/Clients/ceylon247.png";
import tattoo from "../../assets/images/client/Clients/empiretattoo.png";
import jeewa from "../../assets/images/client/Clients/jeewa.png";
import peg from "../../assets/images/client/Clients/peg.png";
import walawwa from "../../assets/images/client/Clients/walawwa.png";

window.fn = OwlCarousel;

class Clientlogo extends Component {
  render() {
    return (
      // <div className="owl-carousel mt-8 no-pb" data-dots="false" data-items={4} data-md-items={4} data-sm-items={3} data-xs-items={2} data-margin={30} data-autoplay="true">

      <OwlCarousel
        className={`owl-carousel mt-${this.props.margintop} no-pb`}
        dotData={false}
        items={this.props.logoitems}
        autoplay={true}
        margin={10}
        dots={false}
        loop={true}
      >
        <div className="item">
          <div className="clients-logo">
            <img id="client" className="img-fluid" src={aghanims} alt="" />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img id="client" className="img-fluid" src={ceylon} alt="" />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img id="client" className="img-fluid" src={tattoo} alt="" />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img id="client" className="img-fluid" src={jeewa} alt="" />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img id="client" className="img-fluid" src={peg} alt="" />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img id="client" className="img-fluid" src={walawwa} alt="" />
          </div>
        </div>
      </OwlCarousel>
    );
  }
}

export default Clientlogo;
