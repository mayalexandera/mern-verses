import React, { useState } from "react";
import ProductCard from "./ProductCard";
import SideBar from "./SideBar";

const ProductList = ({ products, sidebar }) => {

  const [ menu, setMenu ] = useState(false);

  console.log(sidebar)
  return (
    <div className='product-results-body'>
      {sidebar && <SideBar />}
      <div className='product-grid-container'>
        <div className='product-grid'>
          <div className='product-grid-items'>
            {products && products.map((product) => {
                  return <ProductCard product={product} key={product._id} />;
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;