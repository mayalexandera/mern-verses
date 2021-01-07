import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import "./Products.css";
import ProductCard from "./ProductCard";

const Products = (props) => {
  useEffect(() => {
    const getProd = () => props.fetchProducts();
    getProd()
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
  // console.log(props.products);
  return (
    <div className='product-container'>
      <h2 style={{ textAlign: "center" }}>Products</h2>
      <div className='products-section'>{renderProducts()}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { products: state.products.products };
};

export default connect(mapStateToProps, actions)(Products);
