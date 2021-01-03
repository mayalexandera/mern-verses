import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header/Header";
import AuthBanner from "./AuthBanner/AuthBanner";
import Landing from "./Landing/Landing";
import SurveyDashboard from "./surveys/SurveyDashboard"
import Profile from "./Profile/Profile";
import SurveyNew from "./surveys/SurveyNew";
import SurveyThanks from "./surveys/SurveyThanks";
import Favorites from "./Favorites/Favorites";
import Dashboard from "./Dashboard/Dashboard";
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
            <Header onClick={console.log(this)} />
            <div className='app-header'/>
            <Route exact path='/' component={Landing} />
            <Route exact path='/member/surveys' component={SurveyDashboard} />
            <Route exact path='/member/surveys/thanks' component={SurveyThanks} />
            <Route path='/member/surveys/new' component={SurveyNew} />
            <Route path='/products' component={Products} />
            <Route path='/member' component={Dashboard} />
            <Route path='/member/profile' component={Profile} />
            <Route path='/member/favorites' component={Favorites} />
            <Route path='/member/orders' component={Orders} />
            <Route path='/member/cart' component={Cart} />

            <Route path='/member/settings' component={AccountSettings} />
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default connect(null, actions)(App);
