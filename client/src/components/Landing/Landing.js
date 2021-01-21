import React, { useState } from "react";
import "./Landing.css";
const Landing = () => {
  const [text, setText] = useState('Hello')
  return (
    <div className='landing-container'>
      <h1>Verses</h1>
      <p className='subtitle'>a non-gendered closet</p>
      <div className='description'>
        <p>curated clothing in the name of fluidity and freedom.</p>
        <p>the subscription service designed to degender self expression.</p>
      </div>
    </div>
  );
};

export default Landing;
