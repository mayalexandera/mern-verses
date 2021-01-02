import React from "react";
import './AccountSettings.css'
import Payments from "../Payments/Payments";

function AccountSettings() {
  return (
    <div className='settings-container'>
      <div className='settings-wrapper'>
        <h2>Account Settings</h2>
       <Payments/>
      </div>
    </div>
  );
}

export default AccountSettings;
