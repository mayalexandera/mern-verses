import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = (props) => {

  console.log(props)

  return (
   <div className='dashboard-wrapper-container'>
      <div className='dashboard-container'>
        <div className='dashboard-header'><div className='dashboard-header-title'>{props.title || '...loading'}</div></div>
        <div className='dashboard-wrapper'>
          <ul className='dashboard-list'>
            <NavLink to='/member/profile'>Profile</NavLink>
            <NavLink to='/orders'>Orders</NavLink>
            <NavLink to='/favorites'>Favorites</NavLink>
            <NavLink to='/settings'>Account</NavLink>
          </ul>
        </div>
      </div>
   </div>
  );
}

export default Dashboard;
