import React from "react";
import { connect } from "react-redux";
// import "./Cart.css";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const Cart = ({ cart }) => {
  const renderCart = () => {
    if (cart) {
      return cart.items.map((item) => {
        return <CartItem item={item} key={item._id} />;
      });
    }
  };
  return (

        <div className='cart-content'>
          <div className='cart-list'>
            <h4>Bag</h4> {renderCart()}
          </div>
          <div className='cart-summary-wrapper'>
            <div className='cart-summary'>
              <CartSummary/>
            </div>
          </div>
        </div>

  );
};

const mapStateToProps = ({ cart }) => {
  return { cart };
};

export default connect(mapStateToProps)(Cart);
