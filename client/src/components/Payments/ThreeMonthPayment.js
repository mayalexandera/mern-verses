import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

const ThreeMonthPayment = ({ tier: { price, items }, handleThreeMonthToken, credits, id, className}) => {
    return (
      <StripeCheckout
        name='VERSES'
        description={`${items} items/$${Number(price)} per month`}
        amount={Number(price*100)}
        token={(token) => handleThreeMonthToken(token, price, credits, items )}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className={className} id={id} >Try Now</button>
      </StripeCheckout>
    )
  }

export default connect(null, actions)(ThreeMonthPayment);
