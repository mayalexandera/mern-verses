import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../../actions/";

class ThreeMonthPayment extends Component {
  render() {
    console.log(this.props)
    return (
      <StripeCheckout
        name='VERSES'
        description='$178 ($89/month)'
        description={`$${this.props.amt*this.props.credits} ($${this.props.amt}/${this.props.credits} month)`}
        amount={this.props.amt*this.props.credits*100}
        token={(token) => this.props.handleThreeMonthToken(token, this.props.amt, this.props.credits)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className='survey-button button-wrapper'>Try Now</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(ThreeMonthPayment);
