import React from "react";
import ProductCard from "./ProductCard";
import SideBar from "./SideBar";

const ProductList = ({ products, message, sidebar, setSidebar }) => {
  return (
    <div className='product-results-body'>
      <SideBar setSidebar={setSidebar} sidebar={sidebar} />
      <div className='product-grid-container'>
        <div className='product-grid'>
          <div className='product-grid-items'>
            {products &&
              products.map((product, index) => {
                return (
                  <ProductCard
                    key={index}
                    product={product}
                    key={product._id}
                  />
                );
              })}
          </div>
        </div>
          <h1>{message}</h1>
      </div>
    </div>
  );
};

export default ProductList;
