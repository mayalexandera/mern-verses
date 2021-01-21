import React from "react";
import ProductCard from "./ProductCard";
import SideBar from "./SideBar";

const ProductList = ({ products }) => {
  return (
    <div className='product-results-body'>
      <SideBar />
      <div className='product-grid-container'>
        <div className='product-grid'>
          <div className='product-grid-items'>
            {products && products
              ? products.map((product) => {
                  return <ProductCard product={product} key={product._id} />;
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;