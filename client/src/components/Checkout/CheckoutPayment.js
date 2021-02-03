import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import shippingAddress from "./shippingFields";

const CheckoutPayment = ({ user }) => {
  return (
    <section id='shipping'>
      <header className='section-header bg-dark-grey'>
        <h2>2. Payment</h2>
        <NavLink to='/cart'>Edit</NavLink>
      </header>
      <div className='shipping-section'>
        <div className='shipping-row'>
          <div className='shipping-wrapper'>
            <div className='address-preview-container'>
              <h3 className='address-header'> Payment Method</h3>
              <div className='address-preview text-color-grey'>
                <div>
                  <p>Credits: {user.membership[0].credits}</p>
                  <p>Items: {user.membership[0].items}</p>
                </div>
              </div>
              <div className='address-preview '>
                <h3 className='address-header'>Billing Details</h3>
                <ul className='text-color-grey'>
                  <li>{`${shippingAddress.name.primary.given} ${shippingAddress.name.primary.family}`}</li>
                  <li>{`${shippingAddress.line1}`}</li>
                  <li>{`${shippingAddress.locality}, ${shippingAddress.province} ${shippingAddress.code}, ${shippingAddress.country}`}</li>
                </ul>
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
