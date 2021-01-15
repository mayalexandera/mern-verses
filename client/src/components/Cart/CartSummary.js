import React from "react";
import { connect } from "react-redux";

const CartSummary = ({ cart }) => {
  return (
    <div>
     Summary
    </div>
  );
};

const mapStateToProps = ({ cart }) => {
  return { cart };
};

export default connect(mapStateToProps)(CartSummary);
