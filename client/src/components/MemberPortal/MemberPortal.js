import React from "react";

import Dashboard from "../Dashboard/Dashboard";
import './MemberPortal.css'

function MemberPortal() {
  return (
    <div>
      <div className='spacer'/>
      <Dashboard />
      <div className='spacer'/>
      <h2 style={{ textAlign: "center" }}>MemberPortal</h2>
    </div>
  );
}

export default MemberPortal;
