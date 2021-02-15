import React from "react";
import { NavLink } from "react-router-dom";

const OrderItemCard = ({ orderNumber, orderedDate, item, index }) => {
  const dateType = new Date(orderedDate);
  let [day, month, date, year] = dateType.toDateString("en-US").split(" ");
  return (
    <div className='order-item-card-container' key={index}>
      <div className='order-item-card-wrapper'>
        <div className='order-item-card-body'>
          <div className='order-item-image-wrapper'>
           <NavLink className='product-image-link' to ={`/products/${item.productId._id}`}>
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
            <div className='order-item-card-button-container flx-grow-md-0'>
              <button className='button-base btn-secondary-dark'>
                View or Manage
              </button>
              <div className='button-base btn-secondary-dark'>Shop Similar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItemCard;
