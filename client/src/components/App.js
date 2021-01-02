import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header/Header";
import AuthBanner from "./AuthBanner/AuthBanner";
import Landing from "./Landing/Landing";
import MemberPortal from "./MemberPortal/MemberPortal";
import SurveyDashboard from "./surveys/SurveyDashboard"
import Profile from "./Profile/Profile";
import SurveyNew from "./surveys/SurveyNew";
import Favorites from "./Favorites/Favorites";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import Orders from "./Orders/Orders";
import AccountSettings from "./AccountSettings/AccountSettings";
import "./App.css";


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Fragment>
        <BrowserRouter>
            <AuthBanner />
            <Header />
            <div className='app-header'/>
            <Route exact path='/' component={Landing} />
            <Route exact path='/surveys' component={SurveyDashboard} />
            <Route path='/surveys/new' component={SurveyNew} />
            <Route path='/products' component={Products} />
            <Route path='/member' component={MemberPortal} />
            <Route path='/member/profile' component={Profile} />
            <Route path='/member/favorites' component={Favorites} />
            <Route path='/member/orders' component={Orders} />
            <Route exact path='/member/cart' component={Cart} />

            <Route path='/member/settings' component={AccountSettings} />
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default connect(null, actions)(App);
