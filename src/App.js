import React, { Component, Fragment } from "react";
import { HashRouter, Switch, Route, withRouter } from "react-router-dom";
import Header from "./layout/header/header3";
import Footer from "./layout/footer/footer";

import "./assets/css/styles.css";

import $ from "jquery";

import "./App.css";
import "./Vendor.js";

import Aboutus2 from "./pages/company/aboutus2";
import Career from "./pages/company/career";
import SignIn1 from "./pages/account/signin/signin1";
import ForgotPassword from "./pages/account/forgotpassword";
import SignUp from "./pages/account/signup";
import Pricing from "./pages/utilities/pricing";
import Faq from "./pages/utilities/faq";
import Maintenance from "./pages/utilities/maintenance";
import ComingSoon from "./pages/utilities/comingsoon";
import PageNotFound from "./pages/utilities/404";
import PrivacyPolicy from "./pages/utilities/privacypolicy";
import TermCondition from "./pages/utilities/termcondition";
import ProductList from "./pages/shop/product/productlist";
import Checkout from "./pages/shop/product/checkout";
import OrderComplate from "./pages/shop/product/ordercomplate";
import ProductGrid from "./pages/shop/product/productgrid";
import ProductSingle from "./pages/shop/product/productsingle";
import Cart from "./pages/shop/product/cart";
import Portfoliolist from "./pages/portfolio/portfoliolist";
import Portfoliosingle from "./pages/portfolio/portfoliosingle";
import { getProducts } from "./actions";
import { connect } from "react-redux";
import Index4 from "./pages/Index/index4";
import Scrolltop from "./layout/back-to-top";

class App extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.getProducts();
  }
  getUrl(pathname) {
    let pathArray = pathname.split("/");
    return `/${pathArray[1]}` === "/coming-soon"
      ? true
      : `/${pathArray[1]}` === "/maintenance"
      ? true
      : `/${pathArray[1]}` === "/page-not-found"
      ? true
      : false;
  }
  setHeader(pathname) {
    let pathArray = pathname.split("/");
    return `/${pathArray[1]}` === "/"
      ? true
      : `/${pathArray[1]}` === "/coming-soon"
      ? true
      : false;
  }
  render() {
    const { location } = this.props;
    return (
      <Fragment>
        {this.getUrl(location.pathname) ? (
          <Switch>
            <Route path="/coming-soon" component={ComingSoon} />
            <Route path="/maintenance" component={Maintenance} />
            <Route path="/page-not-found" component={PageNotFound} />
          </Switch>
        ) : (
          <div className="page-wrapper">
            {this.setHeader(location.pathname) ? null : <Header />}
            <Switch>
              <Route exact path="/" component={Index4} />
              {/* Company Pages */}
              <Route path="/about-us" component={Aboutus2} />
              <Route path="/career" component={Career} />

              {/* Portfolio Pages */}
              <Route path="/portfolio" component={Portfoliolist} />
              <Route
                path={`/portfolio-single/:category/:id`}
                component={Portfoliosingle}
              />

              {/* Account Pages */}
              <Route path="/sign-in" component={SignIn1} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/forgot-password" component={ForgotPassword} />

              {/* Utilitie Pages */}
              <Route path="/pricing" component={Pricing} />
              <Route path="/faq" component={Faq} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route path="/term-condition" component={TermCondition} />

              {/* Shop Pages */}
              <Route path="/product-list" component={ProductList} />
              <Route path="/product-grid" component={ProductGrid} />
              <Route
                path={`/product-single/:category/:id`}
                component={ProductSingle}
              />
              <Route path="/cart" component={Cart} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/order-complate" component={OrderComplate} />
            </Switch>
            <Footer />
            <Scrolltop />
          </div>
        )}
      </Fragment>
    );
  }
}

const AppMapStateToProps = (state) => {
  return {
    products: state.data.products,
  };
};

const AppMapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch(getProducts());
    },
  };
};

export default connect(
  AppMapStateToProps,
  AppMapDispatchToProps
)(withRouter(App));
