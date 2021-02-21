import React from "react";
import OrderItemCard from "./OrderItemCard";

const OrderList = ({ order, orderShow }) => {
  const renderOrderItems = () => {
    return order.items.map((item, index) => {
      return (
        <OrderItemCard
          key={index}
          orderedDate={order.created}
          index={index}
          item={item}
          orderShow={orderShow}
          orderNumber={order._id}
        />
      );
    });
  };
  return order ? renderOrderItems() : null;
};

export default OrderList;
