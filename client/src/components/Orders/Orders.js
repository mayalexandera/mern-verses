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
          <div className='orders-list'>
            {" "}
            <div className='order-items-wrapper'>
              <div className='order-items-message'>
                <div className='order-items-icon-wrapper'>
                  <img src='https://www.nike.com/assets/experience/membership/profile/dist/2.3.4/images/shopping_wearTests_icon.svg' />
                </div>
                <div className='order-items-message-body'>
                  Click {<span>'View or Manage' </span>}to cancel an order,
                  track a shipment, or start a return.
                </div>
              </div>
              {orders.orders.length > 0 ? renderOrders() : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ orders }) => {
  return { orders };
};
export default connect(mapStateToProps, actions)(Orders);
