import React from 'react'

const AccountSetting = ({item, index}) => {
return (
<div key={index} className='settings-nav col-sm-12'>
  <div className='settings-nav-item'>
    <div className='settings-nav-item-button'>
      <div className='settings-nav-link'>
        <div className='settings-nav-link-icon'>
          <img alt={item.title} src={item.icon}></img>
        </div>
        <div className='settings-headline-5'>
          <div className='full-width full-height account'>
            <span className='cta-primary-dark'>{item.title}</span>
          </div>
        </div>
        <div className='chevron-right'>
          <span class='material-icons'>chevron_right</span>
        </div>
      </div>
    </div>
  </div>
</div>
)
}

export default AccountSetting;
