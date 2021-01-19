import React from "react";
import { connect } from "react-redux";
import ProductList from "../Products/ProductList";
import CategoryHeader from './CategoryHeader'
import { Link } from "react-router-dom";

import "./Category.css";
import "../Products/Products.css";

const Category = (props) => {
  console.log('in category container')
  return (
    <div className='product-container'>
      { props.byCategory ? <CategoryHeader category={props.byCategory.name} count={props.byCategory.products.length}/> : null}
      <div className='product-spacer'/>
      <div className='products-section'>
        {props.byCategory ? <ProductList products={props.byCategory.products} /> : null};
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { byCategory: state.products.byCategory };
};

export default connect(mapStateToProps, null)(Category);
