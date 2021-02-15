import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../store/actions/";

import "./AuthBanner.css";

class AuthBanner extends Component {
  renderContent() {
    switch (this.props.auth.isLoggedIn) {
      case null:
        return [
          <div className='member-banner-list_col' key={1}>
            <a href='/auth/google'>Login with Google</a>
          </div>,
          <span className='member-banner-separator' key={2}>|</span>,
          <div className='member-banner-list_col'  key={3}>
            <a href='/auth/google'>Sign Up</a>
          </div>,
        ];
      case false:
        return [
          <div className='member-banner-list_col' key={4}>
            <a href='/auth/google'>Login with Google</a>
          </div>,
          <span className='member-banner-separator' key={5}>|</span>,
          <div className='member-banner-list_col' key={6}>
            <a href='/auth/google'>Sign Up</a>
          </div>,
        ];
      case true:
        return [
          <div className='member-banner-list_col' key={7}>
            <a href='/api/logout'>Logout</a>
          </div>,
          <span className='member-banner-separator' key={9}>
            |
          </span>,
          <div className='member-banner-list_col' key={8}>
            <a href='/member/profile'>Hi, {this.props.auth.user.givenName}</a>
            <div className='profile-icon'>
              <svg
                height='24px'
                width='24px'
                fill='#111'
                viewBox='0 0 24 24'
                style={{ display: "inline-block" }}
              >
                <path d='M16.44 11A5.94 5.94 0 0 0 18 7 6 6 0 0 0 6 7a5.94 5.94 0 0 0 1.56 4A5 5 0 0 0 3 16v5a1 1 0 0 0 2 0v-5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v5a1 1 0 0 0 2 0v-5a5 5 0 0 0-4.56-5zM8 7a4 4 0 1 1 4 4 4 4 0 0 1-4-4z'></path>
              </svg>
            </div>
          </div>,
        ];
      default:
        return [
          <div className='member-banner-list_col' key={1}>
            <a href='/auth/google'>Login with Google</a>
          </div>,
          <span className='member-banner-separator' key={2}>|</span>,
          <div className='member-banner-list_col' key={3}>
            <a href='/auth/google'>Sign Up</a>
          </div>,
        ];
    }
  }

  //add dropdown menu with account: profile, orders, favorites, account settings, logout
  render() {
    return <div className='member-banner-wrapper'><div className='member-banner-list'>{this.renderContent()}</div></div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { fetchUser })(AuthBanner);
