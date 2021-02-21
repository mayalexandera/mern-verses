import React from 'react'  
import { connect } from 'react-redux'
import { placeOrder, calculateCartTotal } from '../../store/actions'

const OrderReview = ({ orders, placeOrder, calculateCartTotal }) => {

  const handleClick = (e) => {
    e.preventDefault()
    calculateCartTotal()
    console.log(placeOrder)
    placeOrder()
  }
  return (
    <section id='shipping'>
      <header className='section-header bg-dark-grey'>
        <h2>3. Order Review</h2>
      </header>
      <div className='shipping-section'>
        <div className='shipping-row'>
          <div className='shipping-wrapper'>
            <div className='order-preview-container'>
              <p>
                By clicking the Place Order button, you confirm that you have
                read and understood, and accept our Terms and Conditions, Return
                Policy, and Privacy Policy.
              </p>
              <div className='place-order-button-row'>
                <button
                onClick={handleClick}className='place-order-button-wrapper'>Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps =({ orders }) => {
  return { orders }
}

export default connect(mapStateToProps, { placeOrder, calculateCartTotal })(OrderReview);