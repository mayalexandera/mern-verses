import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Payments from "../Payments/Payments";

import "./Profile.css";

const Profile = (props) => {
  const renderUser = () => {
    return props.auth.isLoggedIn && props.auth.user ? (
      <div className='profile-wrapper'>
        <div className='profile-header-wrapper'>
          <div>
            <div
              style={{ backgroundImage: `url(${props.auth.user.photoUrl})` }}
              className='profile-photo-wrapper'
            />

            <div className='profile-subtitle'>
              <h2>{props.auth.user.displayName}</h2>
              <h4>Verses Member Since June 2017</h4>
            </div>
          </div>
          <div className='profile-header'>
            <div className='credits-container'>
              Credits: {props.auth.user.credits}
              <Payments />
            </div>
            <div className='credits-container'>
              <NavLink to='/member/surveys/new'>
              Create New Survey
              </NavLink>
                <p>+</p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>loading...</div>
    );
  };
  return renderUser();
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Profile);
