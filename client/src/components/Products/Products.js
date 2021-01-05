import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import './Products.css'

const Products = (props) => {
  console.log(props.sizes)
  return (
    <div className='product-container'>
      <h2 style={{ textAlign: "center" }}>Products</h2>
    </div>
  );
}
const mapStateToProps = ({ products, sizes }) => {
  return { products, sizes };
};

export default connect(mapStateToProps, actions)(Products);
