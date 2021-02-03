import React from "react";

const PlanCard = ({ tier, handleClick }) => {
  return (
    <div
      onClick={(e) => handleClick(e, tier)}
      className='col-sm-4'
      id='plans-col'
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
