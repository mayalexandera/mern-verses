import React from "react";
import { connect } from 'react-redux'
import CartDetail from './CartDetail.js'

const CartDetails = ({ items, totals }) => {
  return (
    <div>
      <div className='cart-details'>
        <div>
          <header>
            <h3 className='cart-details-title'>Arrives By Mon, Feb 8</h3>
          </header>
          <div className='details-container'>
            { items.map(item => {
              return (<CartDetail item={item}/>)
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
