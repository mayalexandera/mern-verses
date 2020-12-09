import React  from 'react'
import { NavLink } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
  return (
    <nav>
      <div className='dashboard-wrapper'>
        <ul>
          <NavLink to='/member/profile'>Profile</NavLink>
          <NavLink to='/surveys'>Orders</NavLink>
          <NavLink to='/surveys'>Favorites</NavLink>
          <NavLink to='/member/profile/settings'>Account Settings</NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Dashboard;