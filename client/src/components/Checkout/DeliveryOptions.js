import React from "react";
import { NavLink } from 'react-router-dom'
import "./Checkout.css";
import shippingAddress from "./shippingFields";

const DeliveryOptions = () => {
  return (
    <section id='shipping'>
      <header className='section-header bg-dark-grey'>
        <h2>1. Delivery options</h2>
        <NavLink to='/cart'>Edit</NavLink>
      </header>
      <div className='shipping-section '>
        <div className='shipping-row'>
          <div className='shipping-wrapper'>
            <div className='shipping-preview-container'>
              <div className='address-preview '>
                <h3 className='address-header'>Shipping Address</h3>
                <span className='address-preview text-color-grey'>
                  <p>{`${shippingAddress.name.primary.given} ${shippingAddress.name.primary.family}`}</p>
                  <p>{`${shippingAddress.line1}`}</p>
                  <p>{`${shippingAddress.locality}, ${shippingAddress.province} ${shippingAddress.code}, ${shippingAddress.country}`}</p>
                  <p>{`${shippingAddress.email}`}</p>
                  <p>{`${shippingAddress.phone.primary}`}</p>
                </span>
              </div>
            </div>
            <div className='shipping-preview-container'>
              <h3 className='address-header '>Shipping Speed</h3>
              <div className='address-preview text-color-grey'>
                <p>FREE</p>
                <span>Arrives by Mon, Feb 8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryOptions;
