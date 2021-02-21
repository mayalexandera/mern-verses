import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchOrder } from "../../store/actions";
import "./OrderShow.css";
import Dashboard from "../Dashboard/Dashboard";
import OrderList from "./OrderList";

const Order = (props) => {
  const [orderShow, setOrderShow] = useState(true)
  const orderId = props.match.params.orderId;

  useEffect(() => {
    props.fetchOrder(orderId);
  }, [fetchOrder, orderId]);

  const renderOrder = () => {
    if (props.order.totals) {
    const dateType = new Date(props.order.created);
    let [day, month, date, year] = dateType.toDateString("en-US").split(" ");
        const returnType = new Date(dateType + 1000000000000);
        let [
          returnDay,
          returnMonth,
          returnDate,
          returnYear,
        ] = returnType.toDateString("en-US").split(" ");
      return (
        <div className='order-detail-wrapper'>
          <div className='order-detail-header'>
            {" "}
            <div className='order-detail-header-body'>
              <h2>Delivered</h2>
              <p className='text-color-secondary'>{`Ordered ${month} ${date}, ${year}`}</p>
              <p className='text-color-secondary'>Purchased Online</p>
            </div>
          </div>
          <OrderList orderShow={orderShow} order={props.order} />
        </div>
      );
    }
  };
  return (
    <div className='orders-container'>
      <Dashboard title='Orders' />
      <div>{renderOrder()}</div>
    </div>
  );
};

const mapStateToProps = ({ orders: { order } }) => {
  return { order };
};

export default connect(mapStateToProps, { fetchOrder })(Order);
