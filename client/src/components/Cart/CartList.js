import React from "react";
import { connect } from "react-redux";
import { deleteCartItem } from "../../store/actions";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const Cart = ({ cart, deleteCartItem }) => {
  const renderCart = () => {
    if (cart && cart.items.length > 0) {
      return cart.items.map((item) => {
        return <CartItem deleteCartItem={deleteCartItem} item={item} key={item._id} />;
      });
    }
    return <div>Items added to your bag will be saved here.</div>
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

export default connect(mapStateToProps, { deleteCartItem })(Cart);
