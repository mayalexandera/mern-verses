import React from "react";
import { connect } from 'react-redux'
import * as actions from "../../actions";
import PlanCard from './PlanCard'
import './Plans.css'


const Plans = ( props ) => {

  const renderPlans = () => {
    return props.plans.map(plan => {
      return (
        <PlanCard plan={plan} ></PlanCard>
      )
    })
  }
  return (
    <div className='plans-container'>
      <h2 style={{ textAlign: "center" }}>Plans</h2>
      <div className='plans-section'>
        {renderPlans()}</div>
    </div>
  );
}

const mapStateToProps = ({ plans }) => {
  return { plans }
}

export default connect(mapStateToProps, actions)(Plans);
