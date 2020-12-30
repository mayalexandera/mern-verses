import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header/Header";
import AuthBanner from "./AuthBanner/AuthBanner";
import Landing from "./Landing/Landing";
import MemberPortal from "./MemberPortal/MemberPortal";
import Dashboard from "./Dashboard/Dashboard";
import Profile from "./Profile/Profile";
import Favorites from "./Favorites/Favorites";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";
import Orders from "./Orders/Orders";
import AccountSettings from "./AccountSettings/AccountSettings";
import "./App.css";

const SurveyNew = () => <div>SurveyNew</div>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <AuthBanner />
            <Header />
            <Route exact path='/' component={Landing} />
            <Route exact path='/surveys' component={Dashboard} />
            <Route path='/surveys/new' component={SurveyNew} />
            <Route path='/member' component={MemberPortal} />
            <Route path='/member/profile' component={Profile} />
            <Route path='/member/settings' component={AccountSettings} />
            <Route path='/member/orders' component={Orders} />
            <Route path='/member/favorites' component={Favorites} />
            <Route exact path='/favorites' component={Favorites} />
            {/* <Route exact path='/member/cart' component={Cart} /> */}
            <Route exact path='/cart' component={Cart} />
            <Route path='/products' component={Products} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
