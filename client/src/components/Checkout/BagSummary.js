import React from "react";
import { NavLink } from 'react-router-dom'
import CartDetails from "./CartDetails";

const BagSummary = ({ totals: { subTotal, estTax, estShipping } }) => {
  return (
    <aside>
      <section>
        <header className='section-header bg-light-grey'>
          <h2>In Your Bag</h2>
          <NavLink to='/cart'>Edit</NavLink>
        </header>
        <div className='summary-section'>
          <div className='summary-col'>
            <div className='summary-row'>
              <div className='col-sm-8'>Subtotal</div>
              <div className='summary-price col-sm-4'>{`$${subTotal}.00`}</div>
            </div>
            <div className='summary-row'>
              <div className='col-sm-8'>Estimated Shipping</div>
              <div className='summary-price col-sm-4'>{`$${estShipping}.00`}</div>
            </div>
            <div className='summary-row'>
              <div className='col-sm-8'>Estimated Tax</div>
              <div className='summary-price col-sm-4'>{`$${estTax}`}</div>
            </div>
            <div className='summary-row summary-total'>
              <div className='col-sm-8'>
                <div className='total-text'>
                 Total
                </div>
              </div>
              <div className='col-sm-4 summary-price'><div className='cart-total'>{`$${subTotal+estTax+estShipping}`}</div></div>
            </div>
          </div>
          <CartDetails/>
        </div>
      </section>
    </aside>
  );
};

export default BagSummary;
