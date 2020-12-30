import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import "./Header.css";

class Header extends Component {

  memberMenu() {
    const menu = 
    <React.Fragment>
      <NavLink className='nav-button' to='/favorites'>
        Favorites
      </NavLink>
      <NavLink className='nav-button' to='/cart'>
        Cart
      </NavLink>
    </React.Fragment>

    return this.props.auth ? menu : null
  }
  render() {
    console.log(this.props.auth);
    return (
      <nav className='main-menu'>
        <div className='nav-wrapper'>
          <ul className='left-menu'>
            <NavLink className='nav-logo' to='/'>
              Verses
            </NavLink>
          </ul>

          <ul className='right-menu'>
            {this.memberMenu()}
            {/* {this.props.auth ? (
              <NavLink className='nav-button' to='/favorites'>
                Favorites
              </NavLink>
            ) : null}
            <NavLink className='nav-button' to='/cart'>
              Cart
            </NavLink> */}
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
        <div className='nav-spacer' />
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
