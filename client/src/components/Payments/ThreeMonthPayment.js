import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../../actions/";

const ThreeMonthPayment = ({amt, credits, handleThreeMonthToken, id}) => {
    return (
      <StripeCheckout
        name='VERSES'
        description={`$${amt*credits} ($${amt}/${credits} month)`}
        amount={amt*credits*100}
        token={(token) => handleThreeMonthToken(token, amt, credits)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button id={id} >Try Now</button>
      </StripeCheckout>
    )
  }

export default connect(null, actions)(ThreeMonthPayment);
