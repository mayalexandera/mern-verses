import React from "react";
import ProductCard from "./ProductCard";
import ProductSideBar from "./ProductSideBar";


const ProductList = ({ products }) => {
  return (
    <div className='product-results-body'>
    
      <ProductSideBar />
      <div className='product-grid-container'>
            <div className='product-grid'>
              <div className='product-grid-items'>
                {products
                  ? products.map((product) => {
                      return (
                        <ProductCard product={product} key={product._id} />
                      );
                    })
                  : null}
              </div>
            </div>
      </div>
    </div>
  );
};

export default ProductList;
