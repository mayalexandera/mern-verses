import React from "react";
import { connect } from "react-redux";
import { deleteCartItem, updateCartItem } from "../../store/actions";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import GuestWishlist from "./GuestWishlist";
import MobileCartHeader from "./MobileCartHeader";
import PopoutCheckout from "./PopoutCheckout";

const Cart = ({ cart, deleteCartItem, updateCartItem }) => {
  const renderCart = () => {
    if (cart && cart.items.length > 0) {
      return cart.items.map((item) => {
        return (
          <CartItem
            updateCartItem={updateCartItem}
            deleteCartItem={deleteCartItem}
            item={item}
            key={item._id}
          />
        );
      });
    } else {
      return (
        <div className='empty-cart-message'>
          There are no items in your bag.
        </div>
      );
    }
  };
  return (
    <div className='cart-content'>
      <MobileCartHeader />
      <div className='cart-list'>
        <h4 className='cart-title'>Bag</h4> {renderCart()}
        <PopoutCheckout />
      </div>
      <div className='cart-summary-container'>
        <div className='cart-summary-wrapper'>
          <CartSummary />
        </div>
      </div>
      <GuestWishlist />
    </div>
  );
};

const mapStateToProps = ({ cart }) => {
  return { cart };
};

export default connect(mapStateToProps, { deleteCartItem, updateCartItem })(
  Cart
);
