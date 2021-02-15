import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import PlanCard from "./PlanCard";
import ThreeMonthPayment from "../Payments/ThreeMonthPayment";
import "./Plans.css";

const Plans = ({ fetchPlans, plans }) => {
  useEffect(() => {
    fetchPlans();
  }, [fetchPlans]);

  const [tier, setTier] = useState({});

  const handleClick = (e, newTier) => {
    e.preventDefault();
    setTier(newTier);
    console.log("hi", tier);
  };
  return (
    <div className='plans-container'>
      <div className='plans-section'>
        <div className='col-lg-6' id='plans_col'>
          <div className='plans-section-container'>
            <div className='image-wrapper'>
              <img
                alt={"product layout"}
                src='https://www.wearseasons.com/_next/static/images/OutfitGrid-1-2d3c07113b3669ca7a421780c19d0639.jpg?w=1120&fit=clip&fm=webp&cs=srgb'
              />
            </div>
          </div>
        </div>
        <div className='plans-col col-lg-6' id='plans_col'>
          <div className='plans-membership-container'>
            <header>
              <h2 className='plans-container-title'>Membership</h2>
              <p>What's included in a monthly membership</p>
            </header>
            <div>
              <div className='details-container'>
                <ul className='plan-feature-bullet-points'>
                  {plans && plans
                    ? plans[0].features.map((feature) => {
                        return (
                          <li>
                            <i class='material-icons-outlined'>done</i>
                            <span>{feature}</span>
                          </li>
                        );
                      })
                    : null}
                </ul>
              </div>
              <div className='plan-tiers-container'>
                {plans && plans
                  ? plans[0].tiers.map((tier, index) => {
                      return (
                        <PlanCard
                          id={"plans_col"}
                          className='col-sm-4'
                          handleClick={handleClick}
                          tier={tier}
                          index={index}
                        />
                      );
                    })
                  : null}
              </div>
            </div>
            <div className='plan-button-wrapper'>
              <ThreeMonthPayment
                className='plan-checkout-button'
                id={"plan-button"}
                tier={tier}
                credits={1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ plans }) => {
  return { plans };
};

export default connect(mapStateToProps, actions)(Plans);
