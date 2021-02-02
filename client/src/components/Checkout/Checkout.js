import React from "react";
import { connect } from "react-redux";
import DeliveryOptions from "./DeliveryOptions";
import BagSummary from './BagSummary'
import "./Checkout.css";

const Checkout = ({ items, totals, orders }) => {
  return (
    <div className='checkout-container' id='checkout-wrapper'>
      <div className='checkout-container'>
        <div className='checkout-banner'>
          <h1 className='checkout-title'>Checkout</h1>
        </div>
        <div className='checkout-section col-lg-8'>
          <DeliveryOptions />
        </div>
        <div className='checkout-section col-lg-4'>
          <BagSummary totals={ totals }/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart: { items, totals }, orders }) => {
  return { items, totals, orders };
};

export default connect(mapStateToProps)(Checkout);
