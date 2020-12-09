import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import "./MemberBanner.css";

class MemberBanner extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return (
          <div className='member-banner-button'>
            <a href='/auth/google'>Login with Google</a>
          </div>
        );
      case false:
        return (
          <div className='member-banner-button'>
            <a href='/auth/google'>Login with Google</a>
          </div>
        );
      default:
        return [
          <NavLink className='member-banner-button' to='/member/profile'>
            Hi, {this.props.auth.googleId}
          </NavLink>,
          <div className='member-banner-button'>|</div>,
          <div className='member-banner-button'>
            <a href='/api/logout'>Logout</a>
          </div>,
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className='member-banner-wrapper'>{this.renderContent()}</div>
        <div className='nav-spacer' />
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(MemberBanner);
