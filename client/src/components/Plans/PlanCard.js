import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import ThreeMonthPayment from "../Payments/ThreeMonthPayment";

const PlanCard = ({plan: {id, description, items, features, trialPrice, regularPrice }}) => {
  const clickHandler = (e) => {
    e.preventDefault();
  
  };

  return (
    <div className='plan-card'>
      <div className='plan-card-body'>
        <div className='plan-card-details'>
          <div>Up to</div>
          <div className=
          'items-per-month'>
            <p>{items} </p>
            <span>items per month</span>
          </div>
        </div>
        <div className='plan-description'>{description}</div>
        <hr id='order-hr' />
        <ul className='plan-feature-bullet-points'>
          {features.map((feature) => {
            return (
              <li>
                <i class='material-icons'>check</i>
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
        <div id='plan-button'>
          <ThreeMonthPayment id={'plan-option'} amt={trialPrice.price} credits={trialPrice.credits} terms={trialPrice.terms}>
            </ThreeMonthPayment>
        </div>
        <div className='plan-price-section'>
          <div className='plan-trial-price'>
            <span>${trialPrice.price}</span> <p>{trialPrice.terms}</p>
          </div>
          <div className='plan-regular-price'>
            <span>${regularPrice}/month after</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
