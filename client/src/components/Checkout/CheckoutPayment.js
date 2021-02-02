import React from "react";
import { connect } from "react-redux";

const CheckoutPayment = ({ user }) => {
  return (
    <section id='shipping'>
      <header className='section-header bg-dark-grey'>
        <h2>2. Payment</h2>
      </header>
      <div className='shipping-section'>
        <div>
          <div className='shipping-wrapper'>
            <div className='shipping-preview-container'>
              <h3 className='cart-details-title'>Select Payment Method</h3>
              <div className='summary-row'>
                <div className='col-lg-6'>Credits: {user.credits}</div>
                <div className='col-lg-6'>Credits: {user.credits}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ auth: { user } }) => {
  return { user };
};

export default connect(mapStateToProps)(CheckoutPayment);
