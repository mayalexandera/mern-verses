import React, { useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {

  return (
    <div className='product-list-body'>
      <div className='product-grid'>
        <div className='product-grid-items'>
          {products ? products.map((product) => {
            return <ProductCard product={product} key={product._id}/>
          }) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductList