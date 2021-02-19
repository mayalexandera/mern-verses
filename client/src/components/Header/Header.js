import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Hamburger from "./Hamburger";
import DropdownContainer from "../Dropdown/DropdownContainer";
import { CSSTransition } from "react-transition-group";
import AuthBanner from "../AuthBanner/AuthBanner";
import "./Header.css";

const Header = ({ cartItems, favoriteItems }) => {
  
  const [expanded, setExpanded] = useState(false);
  const showDropdown = () => {
    console.log(expanded);
    setExpanded(!expanded);
    console.log(expanded);
  };
  return (
    <div className='main-menu-container'>
      <AuthBanner />
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
            <div className='favorites-button-wrapper'>
              <NavLink to='/favorites'>
                <div className='nav-button favorites-button'>
                  <svg
                    height='24px'
                    width='24px'
                    fill='#111'
                    viewBox='0 0 24 24'
                  >
                    <path d='M21.11 4a6.6 6.6 0 0 0-4.79-1.92A6.27 6.27 0 0 0 12 3.84 6.57 6.57 0 0 0 2.89 4c-2.8 2.68-2.45 7.3.88 10.76l6.84 6.63A2 2 0 0 0 12 22a2 2 0 0 0 1.37-.54l.2-.19.61-.57c.6-.57 1.42-1.37 2.49-2.41l2.44-2.39 1.09-1.07c3.38-3.55 3.8-8.1.91-10.83zm-2.35 9.4l-.25.24-.8.79-2.44 2.39c-1 1-1.84 1.79-2.44 2.36L12 20l-6.83-6.68c-2.56-2.66-2.86-6-.88-7.92a4.52 4.52 0 0 1 6.4 0l.09.08a2.12 2.12 0 0 1 .32.3l.9.94.9-.94.28-.27.11-.09a4.52 4.52 0 0 1 6.43 0c1.97 1.9 1.67 5.25-.96 7.98z'></path>
                  </svg>
                  <span className='favorite-count'>
                    {" "}
                    {
                      favoriteItems &&
                      favoriteItems.length}
                  </span>
                </div>
              </NavLink>
            </div>
            <div className='cart-button-wrapper'>
              <NavLink className='nav-button cart-button' to='/cart'>
                <div className='cart-button-icon-wrapper'>
                  <svg
                    height='24px'
                    width='24px'
                    fill='#111'
                    viewBox='0 0 24 24'
                  >
                    <path d='M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z'></path>
                    <path d='M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z'></path>
                  </svg>
                </div>
                <span className='cart-count'>
                  {cartItems && cartItems.length}
                </span>
              </NavLink>
            </div>
          </div>
          <div className='sm-hamburger-icon-wrapper'>
            <button onClick={showDropdown} className='sm-hamburger-icon'>
              <Hamburger />
            </button>
          </div>
          <CSSTransition
            className='slide-in-transition'
            in={expanded}
            timeout={500}
            appear
            unmountOnExit
          >
            <DropdownContainer showDropdown={showDropdown} />
          </CSSTransition>
        </div>
      </header>
    </div>
  );
};

function mapStateToProps({ cart, favoriteList }) {
  return { cartItems: cart.items,
  favoriteItems: favoriteList.items  };
}

export default connect(mapStateToProps, actions)(Header);
