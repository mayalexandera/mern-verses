import React from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom'
import cartSummaryFields from "./cartSummaryFields";
import "./CartSummary.css";

const CartSummary = ({ cart }) => {
  return (
    <aside className='cart-summary-aside'>
      <div className='cart-summary-title-wrapper'>
        <div className='col-sm-12'>
          <div className='cart-summary-title'>Summary</div>
        </div>
      </div>
      <div className='cart-summary-row'>
        <div className='cart-summary-item col-sm-12'>
          <div>
            Do you have a Promo Code?
            <span class='material-icons'>expand_more</span>
          </div>
        </div>
      </div>
      <div className='cart-summary-row'>
        <div className='cart-summary-item-sub col-sm-12'>
          <div className='col-sm-9 field-title'>Subtotal</div>
          <div className='col-sm-3 field-value'>
            <div className='field-value-text'>{cart.totals && `$${cart.totals.subTotal}.00`}</div>
          </div>
        </div>
      </div>
      {cartSummaryFields.map((field, index) => {
        return (
          <div key={index} className='cart-summary-row'>
            <div className={field.class}>
              <div className='col-sm-9 field-title'>{field.title}</div>
              <div className='col-sm-3 field-value'>
                <div className='field-value-text'>{field.value}</div>
              </div>
            </div>
          </div>
        );
      })}
      <hr className='summary-hr' />
      <div className='cart-summary-total'>
        <div className='col-sm-6'>
          <p className='total'>Total</p>
        </div>
        <div className='col-sm-6'>
          <p className='total-currency'>{`$${cart.totals.subTotal}.00`}</p>
        </div>
      </div>
      <hr className='summary-hr' />
      <div className='checkout-button-container'>
        <div className='checkout-button-wrapper col-sm-12'>
          <NavLink to='/checkout' className='checkout-button'>
            Checkout
          </NavLink>
          <button className='paypal-button'>
            <img
              alt='Paypal'
              width='51'
              height='14'
              src='https://www.nike.com/assets/experience/pet/payment-icons/paypal@2x.png'
            />
          </button>
        </div>
      </div>
    </aside>
  );
};

const mapStateToProps = ({ cart }) => {
  return { cart };
};

export default connect(mapStateToProps)(CartSummary);
