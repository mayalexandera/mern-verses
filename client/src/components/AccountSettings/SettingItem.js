import React from "react";
import { withRouter } from "react-router-dom";
import accountFields from "./accountFields";

const SettingItem = (props) => {

  const renderAddressForm = () => {
    return accountFields.map((field, index) => {
      return (
        <div key={index} className='email-form-item'>
          <div className={field.className}>
            <input name={field.name} className='account-form-input'></input>
            <label for={field.name} className='input-layout-control-label'>
              <span>{field.label}</span>
            </label>
            <fieldset className={field.fieldset}>
            </fieldset>
          </div>
        </div>
      );
    })
  }
  return (
    <div className='mobile-container'>
      <div >
        <div className='account-settings-wrapper'>
          <form>
            <div className='form-header-wrapper'>
              <h1 className='form-header-title headline-3'>
                {props.location.state || "Account Settings"}
              </h1>
            </div>
            <div className='account-form'>
              {renderAddressForm()}
              {/* <div className='email-form-item'>
                <div className='input-layout-control'>
                  <input className='account-form-input'></input>
                  <label className='input-layout-control-label'>
                    <span>Email*</span>
                  </label>
                  <fieldset className='account-form-input-fieldset'>
                    <legend>
                      <p>Email</p>
                      <p>*</p>
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
                          <p>Add</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
              </div> */}
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SettingItem);
