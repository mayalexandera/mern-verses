import React from "react";
import settings from "./settings";
import AccountSetting from "./accountSetting";
import "./AccountSettings.css";

const AccountSettings = (props) => {
  return (
    <div className='settings-container'>
      <div className='settings-nav-title'>
        <h2 className='settings-headline-3'>Settings</h2>
      </div>
      <div className='settings-spacer' />
      <div className='settings-nav-wrapper'>
        <div className='settings-list-container'>
          {settings.map((setting, index) => {
            return <AccountSetting item={setting} index={index} />;
          })}
        </div>
        <div className='mobile-container'>
          <div className='mobile-container-main'>
            <div className='account-settings-wrapper'>
              <form>
                <div className='form-header-wrapper'>
                  <h1 className='form-header-title headline-3'>
                    Account Details
                  </h1>
                </div>
                <div className='account-form'>
                  <div className='email-form-item'>
                    <div className='input-layout-control'>
                      <input className='account-form-input'></input>
                      <label className='input-layout-control-label'>
                        <span>Email*</span>
                      </label>
                      <fieldset className='account-form-input-fieldset'>
                        <legend>
                          <text>Email</text>
                          <text>*</text>
                        </legend>
                      </fieldset>
                    </div>
                  </div>
                  <div className='mobile-input-wrapper col-sm-12 col-md-12'>
                    <div className='mobile-input'>
                      <h3 className='mobile-input-label'>Phone Number</h3>
                      <div className='mobile-phone-number'>
                        <div>
                          <div className='col-sm-6'></div>
                          <div className='col-sm-6 mobile-phone-number-input'>
                            <button className='add-mobile-phone-number'>
                              <text>Add</text>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='location-selection'>
                    <h3 className='mobile-input-label' id="location">Location</h3>
                  </div>
                  <div className='delete-account-wrapper'>
                    <hr className='pt3-sm' />
                    <div className='delete-account-row'>
                      <div className='col-sm-6 mobile-input-label-width'>
                        Delete Account
                      </div>
                      <div>
                        <button className='delete-account-button'>
                          <text>Delete</text>
                        </button>
                      </div>
                    </div>
                    <hr className='pt3-ms' />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
