import React, { useState } from "react";
import { connect } from "react-redux";
import ProductList from "../Products/ProductList";
import CategoryHeader from './CategoryHeader'
// import { Link } from "react-router-dom";

import "./Category.css";
import "../Products/Products.css";

const Category = (props) => {
  const [sidebar, setSidebar] = useState(false);
  console.log('in category container', props)
  return (
    <div className='product-container'>
      {props.byCategory && props.byCategory ? (
        <CategoryHeader
          category={props.byCategory.name}
          sidebar={sidebar}
          setSidebar={setSidebar}
          count={props.byCategory.products.length}
        />
      ) : null}
      <div className='product-spacer' />
      <div className='products-section'>
        {props.byCategory && props.byCategory ? (
          <ProductList
            sidebar={sidebar}
            setSidebar={setSidebar}
            products={props.byCategory.products}
          />
        ) : null}
        ;
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { byCategory: state.products.byCategory };
};

export default connect(mapStateToProps, null)(Category);
