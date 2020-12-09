import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'

import "./Header.css";

class Header extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className='nav-button'>
            <a href='/auth/google'>Login with Google</a>
          </li>
        );
      default:
        return (
          <li className='nav-button'>
            <a href='/api/logout'>Logout</a>
          </li>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <ul className='left-menu'>
            <NavLink className='nav-button' to='/'>
              Clothing
            </NavLink>
            <NavLink className='nav-button' to='/'>
              Accessories
            </NavLink>
            <NavLink className='nav-button' to='/'>
              Plans
            </NavLink>
          </ul>
          <ul className='right-menu'>
            <NavLink className='nav-button' to='/'>
              Favorites
            </NavLink>
            {this.renderContent()}
          </ul>
        </div>
        <div className='nav-spacer'/>
      </nav>
    );
  }
}

//destructured
function mapStateToProps({ auth }) {
  // return { auth: auth };

  //since the keys and values are the same can be further reduced
  return { auth };
}

//not destructured
// function mapStateToProps(state) {
//   return { auth: state.auth }
// }

export default connect(mapStateToProps)(Header);
