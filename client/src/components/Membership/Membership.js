import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PlanCard from "../Plans/PlanCard";

import * as actions from "../../store/actions";
import "./Membership.css";

const Membership = ({ user, fetchPlans, plans }) => {
  useEffect(() => {
    fetchPlans();
  }, [fetchPlans]);
  const [tier, setTier] = useState({});

  const handleClick = (e, newTier) => {
    e.preventDefault();
    setTier(newTier);
    console.log("Membership.js", tier);
  };

  const renderPlan = () => {
    let plan = plans[0].tiers.filter((tier) => {
      return tier.items === user.membership[0].items;
    });
    return (
      <PlanCard
        className='member-tier-card-body'
        id='member-col'
        tier={plan[0]}
        handleClick={handleClick}
      />
    );
  };

  return (
    <div className='membership-container'>
      <div className='membership-section'>
        <div className='membership-tier-container'>
          <div>
            <h3 className='membership-container-title'>Member Benefits</h3>
            <ul className='plan-feature-bullet-points'>
              {plans && plans
                ? plans[0].features.map((feature, index) => {
                    return (
                      <li key={index}>
                        <i class='material-icons-outlined'>done</i>
                        <span>{feature}</span>
                      </li>
                    );
                  })
                : null}
            </ul>

            <div className='edit-button-container'>
              <div>Looking to make a change?</div>
              <div className='edit-button'>Edit</div>
            </div>
          </div>
        </div>
        <div id='tier-card' className='membership-tier-container'>
          <h3 className='membership-container-title'>Membership Details</h3>
          {plans && user ? renderPlan() : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ plans }) => {
  return { plans };
};

export default connect(mapStateToProps, actions)(Membership);
