import React from "react";
import { connect } from 'react-redux'
import CartDetail from './CartDetail.js'

const CartDetails = ({ items, totals }) => {
  return (
    <div>
      <div className='cart-details'>
        <div>
          <header>
            <h3 className='cart-details-title'>Cart Details</h3>
          </header>
          <div className='details-container'>
            { items.map(item => {
              return (<div>{item.name}</div>)
            })}

          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart: { items, totals } }) => {
  return { items, totals }
}

export default connect(mapStateToProps)(CartDetails);
