import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Landing from "./Landing/Landing";
import SurveyDashboard from "./surveys/SurveyDashboard";
import Profile from "./Profile/Profile";
import SurveyNew from "./surveys/SurveyNew";
import SurveyThanks from "./surveys/SurveyThanks";
import Favorites from "./Favorites/Favorites";
import Category from "./Category/Category";
import Layout from "./HOC/Layout";
import Products from "./Products/Products";
import Product from "./Products/Product";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import Orders from "./Orders/Orders";
import Order from "./Orders/Order";
import Plans from "./Plans/Plans";
import AccountSettings from "./AccountSettings/AccountSettings";
import SettingItem from "./AccountSettings/SettingItem";
import "./App.css";

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={Landing} />
        <Route exact path='/member/surveys' component={SurveyDashboard} />
        <Route exact path='/member/surveys/thanks' component={SurveyThanks} />
        <Route path='/member/surveys/new' component={SurveyNew} />
        <Route exact path='/products' exact component={Products} />
        <Route
          exact
          path='/product/:category/list'
          exact
          component={Category}
        />
        <Route exact path='/accessories' exact component={Category} />
        <Route exact path='/products/:id' exact component={Product} />
        <Route path='/plans' component={Plans} />
        <Route path='/member/profile' component={Profile} />
        <Route path='/favorites' component={Favorites} />
        <Route exact path='/orders' exact component={Orders} />
        <Route path='/cart' component={Cart} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/orders/:orderId' component={Order} />

        <Route path='/settings' component={AccountSettings} />
        {/* <Route path='/settings/:setting' component={SettingItem} /> */}
        <Footer />

      </BrowserRouter>
    </Layout>
  );
};

export default connect(null, actions)(App);
