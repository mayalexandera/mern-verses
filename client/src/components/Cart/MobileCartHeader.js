import React from "react";
import "./MobileCartHeader.css";
import { connect } from 'react-redux'

const MobileCartHeader = ({ cart }) => {
  return (
    <div className='mobile-cart-container'>
      <div className='mobile-cart-header'>
        <div className='col-sm-12 mobile-title'>Bag</div>
        <div className='col-sm-12 mobile-subtitle'>
          {cart.items.length === 1 ? `${cart.items.length} Item` :`${cart.items.length} Items` || '0 Items' }
          <span className='separator'>|</span>
          <span className='mobile-cart-total'>{`$${cart.totals.subTotal}.00` || '$0.00'}</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart }) => {
  return { cart }
}

export default connect(mapStateToProps)(MobileCartHeader);
