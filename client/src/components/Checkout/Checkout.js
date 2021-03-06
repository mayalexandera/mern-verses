import React from "react";
import { connect } from "react-redux";
import DeliveryOptions from "./DeliveryOptions";
import BagSummary from "./BagSummary";
import CheckoutPayment from "./CheckoutPayment";
import OrderReview from "./OrderReview";
import "./Checkout.css";

const Checkout = ({ totals }) => {
  return (
    <div className='checkout-container' id='checkout-wrapper'>
      <div className='checkout-container'>
        <div className='checkout-banner'>
          <h1 className='checkout-title'>Checkout</h1>
        </div>
        <div className='checkout-section col-lg-8'>
          <DeliveryOptions />
          <CheckoutPayment />
          <OrderReview />
        </div>
        <div className='checkout-section col-lg-4'>
          <BagSummary totals={totals} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart: { totals } }) => {
  return { totals };
};

export default connect(mapStateToProps)(Checkout);
