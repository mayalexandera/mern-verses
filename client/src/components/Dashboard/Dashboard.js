import React from "react";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className='dashboard-wrapper'>
      <ul>
        <NavLink to='/member/profile'>Profile</NavLink>
        <NavLink to='/member/orders'>Orders</NavLink>
        <NavLink to='/member/favorites'>Favorites</NavLink>
        <NavLink to='/member/settings'>Account</NavLink>
      </ul>
    </div>
  );
}

export default Dashboard;
