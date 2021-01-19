import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductList from "./ProductList";
import CategoryHeader from "../Category/CategoryHeader";
import * as actions from "../../store/actions";
import "./Products.css";

const Products = ({ fetchProducts, fetchCategories, products, byCategory }) => {
  useEffect(() => {
    fetchProducts();
    fetchCategories()
  }, [fetchProducts, fetchCategories]);

  return (
    <div className='product-container'>
      {products && products ? (
        <CategoryHeader
          category='Clothing'
          count={products.length}
          products={products}
        />
      ) : byCategory && byCategory ? (
        <CategoryHeader
          category={byCategory.name}
          count={byCategory.products.length}
          products={byCategory.products}
        />
      ) : null}
      <div className='products-section'>
        <ProductList products={products} />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    byCategory: state.products.byCategory,
  };
};

export default connect(mapStateToProps, actions)(Products);
