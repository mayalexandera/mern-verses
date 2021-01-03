import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux"
import * as actions from '../../actions/'

class Payments extends Component {
  render() {
    return (
      <StripeCheckout

        name="VERSES"
        description='$89/month'
        amount={8900}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <button className='survey-button button-wrapper'>Add Credits</button> 
      </StripeCheckout>
      
    )
  }
}

export default connect(null, actions)(Payments)
