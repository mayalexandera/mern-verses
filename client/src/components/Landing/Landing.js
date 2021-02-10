import React, { Fragment } from "react";
import Content from './Content'
import "./Landing.css";
const Landing = () => {
  return (
   <Fragment>
      <div className='landing-container'>
        <h1>Verses</h1>
        <p className='subtitle'>a non-gendered closet</p>
        <div className='description'>
          <p>curated clothing in the name of fluidity and freedom.</p>
          <p>the subscription service designed to degender self expression.</p>
        </div>
      </div>
        <Content/>
   </Fragment>
  );
};

export default Landing;
