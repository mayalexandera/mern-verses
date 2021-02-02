import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import "./Cart.css";
import CartList from "./CartList";

const Cart = ({ items, fetchCart, isLoggedIn }) => {
  useEffect(() => {
    if (isLoggedIn) {
      fetchCart();
    }
  }, [isLoggedIn]);

  return (
    <div className='cart-container'>
      <div className='cart-section'>{ <CartList items={items} />}</div>
    </div>
  );
};

const mapStateToProps = ({ cart: { items }, auth: { isLoggedIn } }) => {
  return { items, isLoggedIn };
};

export default connect(mapStateToProps, actions)(Cart);
