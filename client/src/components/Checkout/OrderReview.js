import React from 'react'  

const OrderReview = () => {
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
                <div className='place-order-button-wrapper'>Place Order</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderReview;