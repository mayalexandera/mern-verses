import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import "./Header.css";

const Header = ({ favoriteList, cart }) => {
  return (
    <header className='main-menu'>
      <div>
        <div className='nav-wrapper'>
          {/* <div className='nav-container'> */}
          <div className='nav-logo'>
            <NavLink to='/'>Verses</NavLink>
          </div>

          <div className='small-menu-icon'>
            <i className='material-icons-outlined'>menu</i>
            <div className='small-dropdown-menu'></div>
          </div>

          {/* </div> */}
          <div className='center-menu-wrapper'>
            <div className='center-menu-container'>
              <ul className='center-menu-list'>
                <li>
                  <NavLink to='/products'>
                    Clothing
                  </NavLink>
                </li>
               <li>
                  <NavLink to='/products'>
                    Accessories
                  </NavLink>
               </li>
            <li>
                  <NavLink to='/plans'>
                    Plans
                  </NavLink>
            </li>
              </ul>
            </div>
          </div>
          <div className='right-menu'>
            <NavLink
              className='nav-button favorites-button'
              to='/member/favorites'
            >
              <span className='material-icons-outlined'>favorite_border</span>
              <p>
                {favoriteList && favoriteList.items
                  ? favoriteList.items.length
                  : null}
              </p>
            </NavLink>
            <NavLink className='nav-button cart-button' to='/cart'>
              <span className='material-icons-outlined'>shopping_bag</span>
              <p>{cart && cart.items ? cart.items.length : null}</p>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

function mapStateToProps({ cart, favoriteList }) {
  return { cart, favoriteList };
}

export default connect(mapStateToProps, actions)(Header);
