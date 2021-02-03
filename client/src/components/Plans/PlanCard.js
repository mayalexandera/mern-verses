import React from "react";
// import './Plans.css'

const PlanCard = ({ className, id, tier, handleClick }) => {
  return (
    <div
      onClick={(e) => handleClick(e, tier)}
      className={className}
      id={id}
    >
      <div className='plan-card-body'>
        <div className='tier-card-title'>
          <p>{tier.items}</p>
          <span>{tier.items < 2 ? "item" : "items"}</span>
        </div>
        <div className='plan-price-section'>
          <div className='plan-price'>
            <span>${tier.price}</span> <p>/month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
