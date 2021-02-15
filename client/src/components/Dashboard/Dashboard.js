import React from "react";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = (props) => {
  return (
    <div className='dashboard-wrapper-container'>
      <div className='dashboard-container'>
        <div className='dashboard-header-wrapper'>
          <div>
            <div className='dashboard-header-title'>
              <h1>{props.title || "...loading"}</h1>
            </div>
            <div className='dashboard-wrapper'>
              <div className='dashboard-row'>
                <ul className='dashboard-list'>
                  <NavLink to='/member/profile'>Profile</NavLink>
                  <NavLink to='/orders'>Orders</NavLink>
                  <NavLink to='/favorites'>Favorites</NavLink>
                  <NavLink to='/settings'>Settings</NavLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className='dashboard-hr' />
      </div>
    </div>
  );
};

export default Dashboard;
