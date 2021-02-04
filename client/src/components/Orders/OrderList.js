import React from "react";
import CartItemCard from "./OrderItemCard";

const OrderList = ({ order }) => {
  const renderOrderItems = () => {
    return order.items.map((item, index) => {
      return <CartItemCard index={index} item={item} />;
    });
  };
  return (

      <div>{ order ? renderOrderItems() : null}</div>

  );
};

export default OrderList;
