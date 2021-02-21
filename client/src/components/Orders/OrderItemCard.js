import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import { fetchOrder } from '../../store/actions'

const OrderItemCard = ({orderNumber, orderedDate, item, index, orderShow }) => {
  const dateType = new Date(orderedDate);
  const returnType = new Date(dateType + 1000000000000)
  let [day, month, date, year] = dateType.toDateString("en-US").split(" ");
  let [returnDay, returnMonth, returnDate, returnYear] = returnType.toDateString("en-US").split(" ");

  const renderButtons = () => {
    if (!orderShow) {
      return (
        <div className='order-item-card-button-container flx-grow-md-0'>
          <NavLink
            to={`/orders/${orderNumber}`}
            className='button-base btn-secondary-dark'
          >
            View or Manage
          </NavLink>
          <div className='button-base btn-secondary-dark'>Shop Similar</div>
        </div>
      );
    }
  }
  return (
    <div className='order-item-card-container' key={index}>
      <div className='order-item-card-wrapper'>
        <div className='order-item-card-body'>
          <div className='order-item-image-wrapper'>
            <NavLink
              className='product-image-link'
              to={`/products/${item.productId._id}`}
            >
              <img
                alt={item.productId.name}
                src={item.productId.images.model1[0]}
              />
            </NavLink>
          </div>
          <div className='order-item-details-container'>
            <div className='flx-grow-md-0 order-items-details-list'>
              <p>
                {" "}
                <span>Delivered</span>
              </p>
              <NavLink
                className='product-name-link'
                to={`/products/${item.productId._id}`}
              >{`${item.productId.brandName} - ${item.productId.name}`}</NavLink>
              <p>{`Ordered: ${month} ${date}, ${year}`}</p>
              <p>Order #{orderNumber.slice(0, 10)}</p>
            </div>
            {renderButtons()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { fetchOrder})(OrderItemCard)
