import React from "react";
import { connect } from "react-redux";

const GreetingButton = ({ showAccount, user }) => {
  const handleClick = (e) => {
    console.log(user);
    showAccount();
  };
  return (
    <div onClick={(e) => handleClick(e)} className='greeting-button-wrapper'>
      <button className='greeting-button'>
        <svg
          width='30px'
          style={{ display: "inline-block" }}
          height='30px'
          viewBox='0 0 24 24'
        >
          <path d='M16.44 11A5.94 5.94 0 0 0 18 7 6 6 0 0 0 6 7a5.94 5.94 0 0 0 1.56 4A5 5 0 0 0 3 16v5a1 1 0 0 0 2 0v-5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v5a1 1 0 0 0 2 0v-5a5 5 0 0 0-4.56-5zM8 7a4 4 0 1 1 4 4 4 4 0 0 1-4-4z'></path>
        </svg>
        <p>{`Hi, ${user && user.displayName}`}</p>
      </button>
      <span className='material-icons-round'>navigate_next</span>
    </div>
  );
};

const mapStateToProps = ({ auth: { user } }) => {
  return { user };
};

export default connect(mapStateToProps)(GreetingButton);
