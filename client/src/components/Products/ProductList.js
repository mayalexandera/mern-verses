import React from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";
import SideBar from "./SideBar";

const ProductList = ({ products, message, sidebar, setSidebar }) => {
  console.log(message, products)
  return (
    <div className='product-results-body'>
      {products && <SideBar setSidebar={setSidebar} sidebar={sidebar} />}
      <div className='product-grid-container'>
        <div className='product-grid'>
          <div className='product-grid-items'>
              <div>{message}</div>
              {products &&
              products.map((product, index) => {
                console.log(product)
                return <ProductCard key={index} product={product} key={product._id} />;
              })}
            
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ products: { products: { message } } }) => {
  return { message }
}
export default connect(mapStateToProps)(ProductList);
