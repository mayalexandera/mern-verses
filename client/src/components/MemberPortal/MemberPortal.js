import React from "react";

import Dashboard from "../Dashboard/Dashboard";
import './MemberPortal.css'

function MemberPortal() {
  return (
    <div className='member-portal-container'>
      <div className='spacer' />
      <Dashboard />
      <div className='spacer' />
      <h5 style={{ textAlign: "center" }}>MemberPortal</h5>
      <div className='spacer' />
    </div>
  );
}

export default MemberPortal;
