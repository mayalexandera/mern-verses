import React from "react";
import { connect } from "react-redux";
import { deleteCartItem, updateCartItem } from "../../store/actions";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import MobileCartHeader from "./MobileCartHeader";
import PopoutCheckout from "./PopoutCheckout";

const Cart = ({ cart, deleteCartItem, updateCartItem }) => {
  const renderCart = () => {
    if (cart && cart.isLoaded) {
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
    }
    return <div>Items added to your bag will be saved here.</div>;
  };
  return (
    <div className='cart-content'>
      <MobileCartHeader />
      <div className='cart-list'>
        <h4 className='cart-title'>Bag</h4> {renderCart()}
        <PopoutCheckout/>
      </div>
      <div className='cart-summary-container'>
        <div className='cart-summary-wrapper'>
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart }) => {
  return { cart };
};

export default connect(mapStateToProps, { deleteCartItem, updateCartItem })(
  Cart
);
