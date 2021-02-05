import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../store/actions/";

import "./AuthBanner.css";

class AuthBanner extends Component {
  renderContent() {
    switch (this.props.auth.isLoggedIn) {
      case null:
        return [
          <div key={1}>
            <a href='/auth/google'>Login with Google</a>
          </div>,
          <div key={2}>|</div>,
          <div key={3}>
            <a href='/auth/google'>Sign Up</a>
          </div>,
        ];
      case false:
        return [
          <div key={4}>
            <a href='/auth/google'>Login with Google</a>
          </div>,
          <div key={5}>|</div>,
          <div key={6}>
            <a href='/auth/google'>Sign Up</a>
          </div>,
        ];
      case true:
        return [
          <div key={7}>
            <a href='/api/logout'>Logout</a>
          </div>,
          <div key={9}>|</div>,
          <div key={8}>
            <a href='/member/profile'>Hi, {this.props.auth.user.givenName}</a>
          </div>,
        ];
      default:
        return [
          <div key={1}>
            <a href='/auth/google'>Login with Google</a>
          </div>,
          <div key={2}>|</div>,
          <div key={3}>
            <a href='/auth/google'>Sign Up</a>
          </div>,
        ];
    }
  }

  //add dropdown menu with account: profile, orders, favorites, account settings, logout
  render() {
    return <div className='member-banner-wrapper'>{this.renderContent()}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { fetchUser })(AuthBanner);
