import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import "./AuthBanner.css";

class AuthBanner extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return [
          <div key={0} />,
          <div key={1} className='member-banner-button'>
            <a href='/auth/google'>Sign Up |</a>
          </div>,
          <div key={2} className='member-banner-button'>
            <a href='/auth/google'>Login with Google</a>
          </div>,
        ];
      case false:
        return [
          <div key={3} />,
          <div key={4} className='member-banner-button'>
            <a href='/auth/google'>Login with Google</a>
          </div>,
        ];
      default:
        return [
          <div key={5} className='member-banner-left'>
            <NavLink className='member-banner-greeting' to='/member/profile'>
              Hi, {this.props.auth.googleId}
            </NavLink>
          </div>,
          <div key={6} className='member-banner-right'>
            <NavLink className='member-banner-button' to='/member/profile'>
              Profile
            </NavLink>
            <div key={7} className='member-banner-button'>|</div>
            <div key={8} className='member-banner-button'>
              <a href='/api/logout'>Logout</a>
            </div>
          </div>,
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className='member-banner-wrapper'>{this.renderContent()}</div>
        {/* <div className='nav-spacer' /> */}
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(AuthBanner);
