import React from "react";
import settings from './settings'
import AccountSetting from './accountSetting'
import "./AccountSettings.css";

const AccountSettings = (props) => {
  return (
    <div className='settings-container'>
      <div className='settings-nav-title'>
        <h2 className='settings-headline-3'>Settings</h2>
      </div>
      <div className='settings-nav-wrapper'>
        {settings.map((setting, index) => {
          return <AccountSetting item={setting} index={index}/> 
          })
        }
      </div>
    </div>
  );
}

export default AccountSettings;
