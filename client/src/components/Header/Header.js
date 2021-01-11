import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.css";

class Header extends Component {
  render() {
    console.log(this.props.auth);
    return (
      <nav className='main-menu'>
        <div className='nav-wrapper'>
          <NavLink className='nav-logo' to='/'>
            Verses
          </NavLink>
          <ul className='right-menu'>
            <NavLink className='nav-button' to='/member/favorites'>
              Favorites
            </NavLink>
            <NavLink className='nav-button' to='/member/cart'>
              Cart
            </NavLink>
          </ul>
          <div className='small-menu-icon'>
            <i className='material-icons'>menu</i>
            <div className='small-dropdown-menu'>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <ul className='center-menu'>
          <NavLink className='nav-button' to='/products'>
            Clothing
          </NavLink>
          <NavLink className='nav-button' to='/products'>
            Accessories
          </NavLink>
          <NavLink className='nav-button' to='/plans'>
            Plans
          </NavLink>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
