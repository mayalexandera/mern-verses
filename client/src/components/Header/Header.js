import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.css";

class Header extends Component {
  render() {
    console.log(this.props.auth)
    return (
      <nav className='main-menu'>
        <div className='nav-wrapper'>
          <ul className='left-menu'>
            <NavLink className='nav-logo' to='/'>
              Verses
            </NavLink>
          </ul>

          <ul className='right-menu'>
            <NavLink className='nav-button' to='/member/favorites'>
              Favorites
            </NavLink>
            <NavLink className='nav-button' to='/member/cart'>
              Cart
            </NavLink>
          </ul>
        </div>
        <ul className='center-menu'>
          <NavLink className='nav-button' to='/products'>
            Clothing
          </NavLink>
          <NavLink className='nav-button' to='/products'>
            Accessories
          </NavLink>
          <NavLink className='nav-button' to='/'>
            Plans
          </NavLink>
        </ul>
        <div className='nav-spacer'/>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  //since the keys and values are the same can be further reduced

  //   return { auth: state.auth }
  return { auth };
}

export default connect(mapStateToProps)(Header);
