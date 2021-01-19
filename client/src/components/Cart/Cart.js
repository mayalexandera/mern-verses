import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import "./Cart.css";
import CartList from "./CartList";

const Cart = ({ items, fetchCart }) => {

  useEffect(() => {
    fetchCart()
  }, [])
  const renderCart = () => {
    console.log(items)
    if ( items && items ) {
      return <CartList items={items} />;
    }
  };

  return (
    <div className='cart-container'>
      <div className='cart-section'>{renderCart()}</div>
    </div>
  );
};

const mapStateToProps = ({ cart: { items } }) => {
  return { items };
};

export default connect(mapStateToProps, actions)(Cart);
