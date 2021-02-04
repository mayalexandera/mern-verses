import React from "react";
import CartItemCard from "./OrderItemCard";

const OrderList = ({ order }) => {
  const renderOrderItems = () => {
    return order.items.map((item, index) => {
      return (
        <CartItemCard
          orderedDate={order.created}
          index={index}
          item={item}
          orderNumber={order._id}
        />
      );
    });
  };
  return order ? renderOrderItems() : null;
};

export default OrderList;
