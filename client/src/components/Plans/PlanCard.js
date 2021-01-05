import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

const PlanCard = (props) => {
  const clickHandler = (e) => {
    e.preventDefault();
    props.initPlanMembership(props.plan.id);
  };

  const renderText = () => {
    return props.current_plan_membership === null ||
      props.plan.id !== props.current_plan_membership.plan_id
      ? "Try Now"
      : "Current Plan";
  };

  const renderId = () => {
    return props.current_plan_membership === null ||
      props.plan.id !== props.current_plan_membership.plan_id
      ? "plan-option"
      : "current-plan";
  };

  return (
    <div className='plan-card'>
      <div className='plan-card-body'>
        <div className='plan-card-details'>
          <div>Up to</div>
          <div className=
          'items-per-month'>
            <p>{props.plan.items} </p>
            <span>items per month</span>
          </div>
        </div>
        <div className='plan-description'>{props.plan.description}</div>
        <hr id='order-hr' />
        <ul className='plan-feature-bullet-points'>
          {props.plan.features.map((feature) => {
            return (
              <li>
                <i class='material-icons'>check</i>
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
        <div id='plan-button'>
          <button
            plan={props.plan._id}
            value='button'
            onClick={(e) => clickHandler(e)}
            id={"plan-option"}
          >
            plan
          </button>
        </div>
        <div className='plan-price-section'>
          <div className='plan-trial-price'>
            <span>${props.plan.trialPrice.price}</span> <p>{props.plan.trialPrice.terms}</p>
          </div>
          <div className='plan-regular-price'>
            <span>${props.plan.regularPrice}/month after</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
