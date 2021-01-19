import React, { useEffect } from "react";
import { connect } from 'react-redux'
import * as actions from "../../store/actions";
import PlanCard from './PlanCard'
import './Plans.css'


const Plans = ( { fetchPlans, plans } ) => {
  
  useEffect(() => {
   fetchPlans()
  }, [fetchPlans])

  const renderPlans = () => {
    return plans.map(plan => {
      return (
        <PlanCard key={plan._id} plan={plan} ></PlanCard>
      )
    })
  }
  return (
    <div className='plans-container'>
      <h2 style={{ textAlign: "center" }}>Plans</h2>
      <div className='plans-section'>
        {plans ? renderPlans() : null}</div>
    </div>
  );
}

const mapStateToProps = ({ plans }) => {
  return { plans }
}

export default connect(mapStateToProps, actions)(Plans);
