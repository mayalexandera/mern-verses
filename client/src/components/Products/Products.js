import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import "./Products.css";
import ProductCard from "./ProductCard";

const Products = ({ fetchProducts, products }) => {

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts]);

  const renderProducts = () => {
    return products !== null ? (
      products.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })
    ) : (
      null
    );
  };
  return (
    <div className='product-container'>
      <div className='products-section'>{renderProducts()}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { products: state.products.products };
};

export default connect(mapStateToProps, actions)(Products);
