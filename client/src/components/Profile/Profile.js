import React from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom'
import "./Profile.css";

const Profile = (props) => {
  const renderUser = () => {
    return props.auth !== null && props.auth ? (
      <div className='profile-wrapper'>
        <div className='profile-header-wrapper'>
          <div
            style={{ backgroundImage: `url(${props.auth.photoUrl})` }}
            className='profile-photo-wrapper'
          />

          <div className='profile-subtitle'>
            <h2>{props.auth.displayName}</h2>
            <h4>Verses Member Since June 2017</h4>
          </div>
        </div>
        <div>
          <NavLink className='profile-survey-button'  to='/surveys'>
            Create New Survey
          </NavLink>
        </div>
      </div>
    ) : (
      <div>loading...</div>
    );
  };
  return renderUser();
};

const mapStateToProps = ({ auth }) => { return { auth } };

export default connect(mapStateToProps)(Profile);
