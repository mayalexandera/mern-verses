import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ProductList from "./ProductList";
import CategoryHeader from "../Category/CategoryHeader";
import * as actions from "../../store/actions";
import "./Products.css";

const Products = ({ fetchProducts, fetchCategories, products, byCategory }) => {
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [fetchProducts, fetchCategories]);

  return (
    <div className='product-container'>
      {products && products ? (
        <CategoryHeader
          category='Clothing'
          sidebar={sidebar}
          setSidebar={setSidebar}
          count={products.length}
        />
      ) : byCategory && byCategory ? (
        <CategoryHeader
          category={byCategory.name}
          sidebar={sidebar}
          setSidebar={setSidebar}
          count={byCategory.products.length}
        />
      ) : null}
      <div className='products-section'>
        <ProductList sidebar={sidebar} products={products} />
      </div>
    </div>
  );
};
const mapStateToProps = ({ products: { products, byCategory } }) => {
  return { products, byCategory };
};

export default connect(mapStateToProps, actions)(Products);
