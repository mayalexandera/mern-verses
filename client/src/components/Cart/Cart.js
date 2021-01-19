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

  const renderCart = () => {
    if (items && items) {
      return <CartList items={items} />;
    }
    return <div id='empty-cart-message'>There are no items in your bag.</div>;
  };

  return (
    <div className='cart-container'>
      <div className='cart-section'>{renderCart()}</div>
    </div>
  );
};

const mapStateToProps = ({ cart: { items }, auth: { isLoggedIn } }) => {
  return { items, isLoggedIn };
};

export default connect(mapStateToProps, actions)(Cart);
