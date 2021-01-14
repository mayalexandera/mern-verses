import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "./Header.css";

const Header = ({ fetchUser, favoriteList, cart, auth }) => {

  // useEffect(() => {
  //   fetchUser()
  // }, [fetchUser])
  console.log(fetchUser, favoriteList, cart, "Header")
    return (
      
      <nav className='main-menu'>
        <div className='nav-wrapper'>
          <NavLink className='nav-logo' to='/'>
            Verses
          </NavLink>
          <div className='right-menu'>
            <NavLink className='nav-button favorites-button' to='/member/favorites'>
              <span className='material-icons-outlined'>favorite_border</span>
              <p>{favoriteList ? favoriteList.items.length : null}</p>
            </NavLink>
            <NavLink className='nav-button cart-button' to='/member/cart'>
              <span className='material-icons-outlined'>shopping_bag</span>
              <p>{cart ? cart.items.length : null}</p>
            </NavLink>
          </div>

          <div className='small-menu-icon'>
            <i className='material-icons-outlined'>menu</i>
            <div className='small-dropdown-menu'></div>
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

function mapStateToProps({ auth, cart, favoriteList }) {
  return { auth, cart, favoriteList };
}

export default connect(mapStateToProps, actions)(Header);
