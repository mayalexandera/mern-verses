import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className='product-results-body'>
      <main>
        <section>
          <div className='product-grid'>
            <div className='product-grid-items'>
              {products
                ? products.map((product) => {
                    return <ProductCard product={product} key={product._id} />;
                  })
                : null}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductList;
