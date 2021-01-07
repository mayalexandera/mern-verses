import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import "./Products.css";
import ProductCard from "./ProductCard";

const Products = (props) => {
  const fetchProds = props.fetchProducts

  useEffect(() => {
    const getProd = () => fetchProds();
    getProd();
  }, []);

  const renderProducts = () => {
    return props.products !== null ? (
      props.products.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })
    ) : (
      <div>loading..</div>
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
