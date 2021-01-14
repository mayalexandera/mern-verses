import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import ThreeMonthPayment from "../Payments/ThreeMonthPayment";

const PlanCard = ({plan: {id, credits, description, items, features, trialPrice, regularPrice }}) => {
  const clickHandler = (e) => {
    e.preventDefault();
  
  };

  return (
    <div className='plan-card'>
      <div className='plan-card-body'>
        <div className='plan-card-details'>
          <div></div>
          <div className=
          'items-per-month'>
            <p>{credits}</p>
            <span>{credits > 1 ? 'months' : 'month'}</span>
          </div>
        </div>
        <div className='plan-description'>{description}</div>
        <hr id='order-hr' />
        <ul className='plan-feature-bullet-points'>
          {features.map((feature) => {
            return (
              <li>
                <i class='material-icons-outlined'>done</i>
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
        <div id='plan-button'>
          <ThreeMonthPayment id={'plan-option'} amt={trialPrice.price} credits={credits} terms={trialPrice.terms}>
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
