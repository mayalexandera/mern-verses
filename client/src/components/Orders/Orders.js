import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import OrderList from "./OrderList";
import "./Orders.css";

function Orders({ orders, fetchOrders }) {
  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const renderOrders = () => {
    return orders.orders.map((order) => {
      return <OrderList order={order} />;
    });
  };
  return (
    <div className='orders-container'>
      <h2>Orders</h2>
      <div>{ orders.orders.length > 0 ? renderOrders() : null }</div>
    </div>
  );
}

const mapStateToProps = ({ orders }) => {
  return { orders };
};
export default connect(mapStateToProps, actions)(Orders);
