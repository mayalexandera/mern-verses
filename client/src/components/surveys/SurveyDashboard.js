import React from "react";
import { NavLink } from 'react-router-dom'
import Dashboard from "../Dashboard/Dashboard";


const SurveyDashboard = (props) => {
  return (
    <div>
      <div className='top'>
        <Dashboard />
        <div className='survey-container'>
          <NavLink className='survey-button' to='/surveys/new'>
            Create a New Survey
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SurveyDashboard;
