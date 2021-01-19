import React from "react";
import "./MobileCartHeader.css";

const MobileCartHeader = (props) => {
  return (
    <div className='mobile-cart-container'>
      <div className='mobile-cart-header'>
        <div className='col-sm-12 mobile-title'>Bag</div>
        <div className='col-sm-12 mobile-subtitle'>
          {"5 Items  | "}
          <span className='mobile-cart-total'>$286.56</span>
        </div>
      </div>
    </div>
  );
};

export default MobileCartHeader;
