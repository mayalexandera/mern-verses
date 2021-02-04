import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import OrderList from "./OrderList";
import Dashboard from "../Dashboard/Dashboard";
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
      <Dashboard title='Orders' />
      <div className='orders-list-container'>
        <div className='orders-list-wrapper'>
         <div className='orders-list'> {orders.orders.length > 0 ? renderOrders() : null}</div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ orders }) => {
  return { orders };
};
export default connect(mapStateToProps, actions)(Orders);
