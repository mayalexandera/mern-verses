import React from "react";

const CartDetail = ({ item }) => {
  return (
    <figure className='checkout-cart-item'>
      <div className='checkout-cart-image'>
        <img alt={item.productId.name} src={item.featuredImage} />
      </div>
      <figcaption className='checkout-cart-item-details'>
        <div className='item-name'>
          {" "}
          {item.name}/{item.brandName}
        </div>
        <div className='item-style-color'>Size: {item.sizeId.size}</div>
        <div className='item-style-color'>Color: {item.sizeId.color}</div>
        <div className='item-style-color'>
          {`Qty: ${item.count} @ $${item.price}.00`}{" "}
        </div>
        <div className='item-style-color'> ${item.price * item.count}.00</div>
      </figcaption>
    </figure>
  );
};

export default CartDetail;
