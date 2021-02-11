import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Hamburger from "./Hamburger";
import "./Header.css";

const Header = ({ favoriteList, cart }) => {
  return (
    <header className='main-menu'>
      <div className='nav-wrapper'>
        <div className='nav-logo'>
          <NavLink to='/'>Verses</NavLink>
        </div>
        <div className='center-menu-wrapper'>
          <div className='center-menu-container'>
            <ul className='center-menu-list'>
              <li>
                <NavLink className='center-menu-link' to='/products'>
                  Clothing
                </NavLink>
              </li>
              <li>
                <NavLink to='/products'>Accessories</NavLink>
              </li>
              <li>
                <NavLink to='/plans'>Plans</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='right-header-menu'>
          <NavLink className='nav-button favorites-button' to='/favorites'>
            <span className='favorite-icon material-icons-outlined'>
              favorite_border
            </span>
            <span className='favorite-count'>
              {favoriteList && favoriteList.items && favoriteList.items.length}
            </span>
          </NavLink>
          <NavLink className='nav-button cart-button' to='/cart'>
            <span className='bag-icon material-icons-outlined'>
              shopping_bag
            </span>
            <span className='bag-count'>
              {cart && cart.items && cart.items.length}
            </span>
          </NavLink>
        </div>
        <button className='sm-hamburger-icon'>
          <Hamburger />
        </button>
      </div>
    </header>
  );
};

function mapStateToProps({ cart, favoriteList }) {
  return { cart, favoriteList };
}

export default connect(mapStateToProps, actions)(Header);
