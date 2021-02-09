import React from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";
import SideBar from "./SideBar";

const ProductList = ({ products, message, sidebar }) => {
  console.log(message, products)
  return (
    <div className='product-results-body'>
      {<SideBar sidebar={sidebar} />}
      <div className='product-grid-container'>
        <div className='product-grid'>
          <div className='product-grid-items'>
            {!!message && !!message ? (
              <div>{message}</div>
            ) : (
              products &&
              products.map((product, index) => {
                console.log(product)
                return <ProductCard key={index} product={product} key={product._id} />;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ products: { products } }) => {
  return { products }
}
export default connect(mapStateToProps)(ProductList);
