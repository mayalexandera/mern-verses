import React from "react";

import Dashboard from "../Dashboard/Dashboard";
import './MemberPortal.css'

function MemberPortal() {
  return (
      <div className='member-portal-wrapper'>
        <Dashboard />
      <div className='member-portal-container'>
        <div className='section-member-portal'><h5>MemberPortal</h5></div>
        <div className='spacer' />
      </div>
      </div>
  );
}

export default MemberPortal;
