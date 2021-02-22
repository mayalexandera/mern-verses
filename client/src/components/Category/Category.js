import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import ProductList from "../Products/ProductList";
import CategoryHeader from "./CategoryHeader";

import "./Category.css";
import "../Products/Products.css";

const Category = (props) => {
  const [sidebar, setSidebar] = useState(false);
  let count, name, products;

  const renderProps = () => {
    if (props.byCategory) {
      name = props.byCategory.name || "Clothing";
      count = props.byCategory ? props.byCategory.length : 0;
      products = props.byCategory || [];
    }
  };

  renderProps();

  return (
    <Fragment>
      <CategoryHeader
        category={name}
        sidebar={sidebar}
        setSidebar={setSidebar}
        count={count}
      />

      <div className='product-container'>
        <div className='product-spacer' />
        <div className='products-section'>
          {props.message}
          {
            <ProductList
              message={props.message}
              sidebar={sidebar}
              setSidebar={setSidebar}
              products={products}
            />
          }
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    byCategory: state.products.byCategory,
    category: state.products.category,
    message: state.products.message,
  };
};

export default connect(mapStateToProps, null)(Category);
