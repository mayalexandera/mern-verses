import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

const ThreeMonthPayment = ({amt, credits, terms, handleThreeMonthToken, id}) => {
    return (
      <StripeCheckout
        name='VERSES'
        description={`$${Number(amt)} ($${amt})`}
        amount={Number(amt*100)}
        token={(token) => handleThreeMonthToken(token, amt, credits )}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button id={id} >Try Now</button>
      </StripeCheckout>
    )
  }

export default connect(null, actions)(ThreeMonthPayment);
