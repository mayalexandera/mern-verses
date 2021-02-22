import React from "react";
import settings from "./settings";
import AccountSetting from "./accountSetting";
import SettingItem from "./SettingItem";
import "./AccountSettings.css";

const AccountSettings = () => {

  return (
    <div className='settings-container'>
      <div className='settings-nav-title'>
        <h2 className='settings-headline-3'>Settings</h2>
      </div>
      <div className='settings-nav-wrapper'>
        <div className='settings-list-container'>
          {settings.map((setting, index) => {
            return <AccountSetting item={setting} key={index} />;
          })}
        </div>
        <SettingItem />
      </div>
    </div>
  );
};

export default AccountSettings;
