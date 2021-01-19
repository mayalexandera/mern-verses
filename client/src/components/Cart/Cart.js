import React from "react";
import { connect } from "react-redux";
import "./Cart.css";
import CartList from "./CartList";


const Cart = ({ items }) => {
  const renderCart = () => {
    if (items) {
      return( <CartList items={items} />)
    }
  };

  return (
    <div className='cart-container'>
      <div className='cart-section'>{renderCart()}</div>
    </div>
  );
};

const mapStateToProps = ({ cart : { items } }) => {
  return { items };
};

export default connect(mapStateToProps)(Cart);
