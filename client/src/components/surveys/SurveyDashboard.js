import React from "react";
import { NavLink } from 'react-router-dom'
import './Survey.css'

const SurveyDashboard = (props) => {
  return (
    <div>
      <div className='survey-portal-wrapper'>
            <div className='profile-survey-button-wrapper'>
              <NavLink className='profile-survey-button' to='/member/surveys/new'>
                +
              </NavLink>
            Create New Survey
          </div>
      </div>
    </div>
  );
};

export default SurveyDashboard;
