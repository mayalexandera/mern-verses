import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import Payments from "../Payments/Payments";
import "./AuthBanner.css";

class AuthBanner extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return [
          // <div key={0} />,
          <div key={1} className='member-banner-button'>
            <a href='/auth/google'>Sign Up |</a>
          </div>,
          <div key={2} className='member-banner-button'>
            <a href='/auth/google'>Login with Google</a>
          </div>,
        ];
      case false:
        return [
          // <div key={3} />,
          <div key={4}>
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

            <NavLink to='/member/profile'>
              Profile
            </NavLink>

            <div key={7}>|</div>

            <li key={10}>
              Credits: {this.props.auth.credits}
            </li>

            <div key={11}>|</div>

            <Payments/>

            <div key={9} >|</div>

            <a href='/api/logout'>Logout</a>
            
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
