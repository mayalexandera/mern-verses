import React from "react";
import { connect } from "react-redux";
import "./Cart.css";
import CartList from "./CartList";

const Cart = ({ cart }) => {
  const renderCart = () => {
    if (cart) {
      return <CartList items={cart.items} />;
    }
  };
  return <div className='cart-container'><main>{renderCart()}</main></div>;
};

const mapStateToProps = ({ cart }) => {
  return { cart };
};

export default connect(mapStateToProps)(Cart);
