import React from "react";
import { NavLink } from "react-router-dom";

const AccountSubMenuList = () => {
  // const userMenuList = ['Profile', 'Orders', 'Favorites', 'Account Settings', 'Log Out']
  const userMenuList = [
    { title: "Profile", path: "/member/profile" },
    { title: "Orders", path: "/orders" },
    { title: "Favorites", path: "/favorites" },
    { title: "Account Settings", path: "/settings" },
    { title: "Log Out", path: "/logout" },
  ];
  return (
    <div className='sub-menu-list'>
      <button className='dropdown-account-panel-button'>
        <div className='dropdown-account-panel_col'>
          <svg height='30px' width='30px' viewBox='0 0 185.4 300'>
            <path d='M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z'></path>
          </svg>
          <span>
            <span>All</span>
          </span>
        </div>
      </button>

      <div>
        <div className='user-name-wrapper'>
          <p className='user-name'>Maya</p>
        </div>
      </div>
      <div>
        {userMenuList.map(({ title, path }, i) => (
          <div className='dropdown-account-panel-row' key={i}>
            <NavLink to={path}>{title}</NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSubMenuList;
