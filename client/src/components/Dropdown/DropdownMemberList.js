import React from "react";
import { NavLink } from 'react-router-dom' 
import { connect } from 'react-redux'

const DropdownMemberList = ({ items }) => {
  return (
    <div className='dropdown-member-list'>
      <div className='dropdown-member-row'>
        <NavLink to='/favorites'>
          <div className='member-button-icon-wrapper'>
            <svg height='24px' width='24px' fill='#111' viewBox='0 0 24 24'>
              <path d='M21.11 4a6.6 6.6 0 0 0-4.79-1.92A6.27 6.27 0 0 0 12 3.84 6.57 6.57 0 0 0 2.89 4c-2.8 2.68-2.45 7.3.88 10.76l6.84 6.63A2 2 0 0 0 12 22a2 2 0 0 0 1.37-.54l.2-.19.61-.57c.6-.57 1.42-1.37 2.49-2.41l2.44-2.39 1.09-1.07c3.38-3.55 3.8-8.1.91-10.83zm-2.35 9.4l-.25.24-.8.79-2.44 2.39c-1 1-1.84 1.79-2.44 2.36L12 20l-6.83-6.68c-2.56-2.66-2.86-6-.88-7.92a4.52 4.52 0 0 1 6.4 0l.09.08a2.12 2.12 0 0 1 .32.3l.9.94.9-.94.28-.27.11-.09a4.52 4.52 0 0 1 6.43 0c1.97 1.9 1.67 5.25-.96 7.98z'></path>
            </svg>
          </div>
          <p>Favorites</p>
        </NavLink>
      </div>
      <div className='dropdown-member-row'>
        <NavLink to='/cart'>
          <div className='member-button-icon-wrapper'>
            <svg height='24px' width='24px' fill='#111' viewBox='0 0 24 24'>
              <path d='M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z'></path>
              <path d='M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z'></path>
            </svg>
            <span className='dropdown-member-count'>{items && items.length}</span>
          </div>
          <p>Bag</p>
        </NavLink>
      </div>
      <div className='dropdown-member-row'>
        <NavLink to='/orders'>
          <div className='member-button-icon-wrapper'>
            <svg height='24px' width='24px' fill='#111' viewBox='0 0 1000 1000'>
              <path d='M995.6 241.3c0-4.4-4.4-4.4-4.4-8.8-4.4-4.4-8.8-4.4-8.8-8.8H978L486.9 4.5h-35.1L22 219.3h-4.4l-8.8 8.8c-3.2 3.6-4.8 8.4-4.4 13.2H.1v504.3C-1 760.8 7.9 775 22 780.7l495.5 214.9h30.7L978 780.7c13.3-6.6 21.8-20.2 21.9-35.1V254.4c.4-4.8-1.1-9.5-4.3-13.1zM469.3 83.4l399.1 175.4-122.8 61.4-399.1-175.4 122.8-61.4zm61.4 342.1L131.6 250l122.8-61.4L653.5 364l-122.8 61.5zM79 315.8l412.2 179.8V899L79 719.3V315.8zm842 403.5L570.2 894.7V495.6L921 320.2v399.1z'></path>
            </svg>
          </div>
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart: { items }}) => {
  return { items }
}
export default connect(mapStateToProps)(DropdownMemberList);
