import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from "./Header/Header";
import MemberBanner from "./MemberBanner/MemberBanner";
import Landing from "./Landing/Landing";
import Dashboard from "./Dashboard/Dashboard";
import Profile from "./Profile/Profile";
import AccountSettings from "./AccountSettings/AccountSettings";
import "./App.css";

const SurveyNew = () => <div>SurveyNew</div>;
// const Dashboard = () => <div>Dashboard</div>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }



  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <MemberBanner/>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route exact path='/surveys' component={Dashboard} />
            <Route path='/surveys/new' component={SurveyNew} />
            <Route path='/member/profile' component={Profile} />
            <Route
              path='/member/profile/settings'
              component={AccountSettings}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
