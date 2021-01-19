import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductList from "./ProductList";
import CategoryHeader from "../Category/CategoryHeader";
import * as actions from "../../store/actions";
import "./Products.css";

const Products = ({ fetchProducts, products }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className='product-container'>
      <div className='products-section'>
        {products.byCategory && products.byCategory ? (
          <CategoryHeader
            category={products.byCategory.name}
            count={products.byCategory.products.length}
          />
        ) : null}
        <ProductList products={products} />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { products: state.products.products };
};

export default connect(mapStateToProps, actions)(Products);
