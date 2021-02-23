import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import ProductList from "../Products/ProductList";
import CategoryHeader from "./CategoryHeader";

import "./Category.css";
import "../Products/Products.css";

const Category = (props) => {
  const [sidebar, setSidebar] = useState(false);
  let count, categoryName, products

  const renderProps = () => {
    if (props.categoryProducts) {
      categoryName = props.categoryName 
      count = props.categoryProducts ? props.categoryProducts.length : 0;
      products = props.categoryProducts || [];

    }
  };

  renderProps();

  return (
    <Fragment>
      <CategoryHeader
        categoryName={categoryName}
        sidebar={sidebar}
        setSidebar={setSidebar}
        count={count}
      />

      <div className='product-container'>
        <div className='product-spacer' />
        <div className='products-section'>
          {
            <ProductList
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
    categoryProducts: state.products.categoryProducts,
    categoryId: state.products.categoryId,
    categoryName: state.products.categoryName,
  };
};

export default connect(mapStateToProps, null)(Category);
