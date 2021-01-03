import React from "react";
import { connect } from 'react-redux'
import * as actions from "../../actions";
import './Plans.css'


const Plans = ( props ) => {
  console.log(props)
  const renderPlans = () => {
    return props.plans.map(plan => {
      return (
        <div>{plan.description}</div>
      )
    })
  }
  return (
    <div className='plans-container'>
      <h2 style={{ textAlign: "center" }}>Plans</h2>
      {renderPlans()}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    plans: state.plans
  }
}

export default connect(mapStateToProps, actions)(Plans);
