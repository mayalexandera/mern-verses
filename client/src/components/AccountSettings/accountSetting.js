import React from "react";
import { NavLink } from 'react-router-dom'

const AccountSetting = ({ item , index }) => {
  return (
    <div
      id='settings_col'
      key={index}
      className='settings-nav-item-wrapper col-sm-12'
    >
      <div className='settings-nav-item'>
        <div className='settings-nav-item-button'>
          <NavLink to={{pathname:`/settings/${item.id}`, state: item.title }} className='settings-nav-link'>
            <div className='settings-nav-link-icon'>
              <img alt={item.title} src={item.icon}></img>
            </div>
            <div className='settings-headline-5'>
              <div className='full-width full-height account'>
                <span className='cta-primary-dark'>{item.title}</span>
              </div>
            </div>
            <div className='chevron-right'>
              <span class='material-icons'>chevron_right</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
