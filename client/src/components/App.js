import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions";

import Header from "./Header/Header";
import AuthBanner from "./AuthBanner/AuthBanner";
import Landing from "./Landing/Landing";
import SurveyDashboard from "./surveys/SurveyDashboard";
import Profile from "./Profile/Profile";
import SurveyNew from "./surveys/SurveyNew";
import SurveyThanks from "./surveys/SurveyThanks";
import Favorites from "./Favorites/Favorites";
import Category from "./Category/Category";
import Dashboard from "./Dashboard/Dashboard";
import Layout from "./HOC/Layout";
import Products from "./Products/Products";
import Product from "./Products/Product";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import Orders from "./Orders/Orders";
import Plans from "./Plans/Plans";
import AccountSettings from "./AccountSettings/AccountSettings";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout>
        <BrowserRouter>
          <AuthBanner />
          <Header />
          <div className='app-header' />
          <Route exact path='/' component={Landing} />
          <Route exact path='/member/surveys' component={SurveyDashboard} />
          <Route exact path='/member/surveys/thanks' component={SurveyThanks} />
          <Route path='/member/surveys/new' component={SurveyNew} />
          <Route exact path='/products' component={Products} />
          <Route path='/product/list/:category' component={Category} />
          <Route path='/products/:id' exact component={Product} />
          <Route path='/plans' component={Plans} />
          <Route path='/member/profile' component={Profile} />
          <Route path='/favorites' component={Favorites} />
          <Route path='/orders' component={Orders} />
          <Route path='/cart' component={Cart} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/order/success/:orderId' component={Checkout} />

          <Route path='/settings' component={AccountSettings} />
        </BrowserRouter>
      </Layout>
    );
  }
}

export default connect(null, actions)(App);
