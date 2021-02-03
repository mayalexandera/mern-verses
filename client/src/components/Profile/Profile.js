import React from "react";
import { connect } from "react-redux";
import  Membership  from '../Membership/Membership'
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
             <h4> Credits: {props.auth.user.membership[0].credits}</h4>
            </div>
          </div>

        </div>
        <Membership user={props.auth.user}/>
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
