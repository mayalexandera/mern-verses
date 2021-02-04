import React from "react";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
   <div className='dashboard-wrapper-container'>
      <div className='dashboard-container'>
        <div className='dashboard-header'>hi</div>
        <div className='dashboard-wrapper'>
          <ul className='dashboard-list'>
            <NavLink to='/member/profile'>Profile</NavLink>
            <NavLink to='/member/orders'>Orders</NavLink>
            <NavLink to='/member/favorites'>Favorites</NavLink>
            <NavLink to='/member/settings'>Account</NavLink>
          </ul>
        </div>
      </div>
   </div>
  );
}

export default Dashboard;
