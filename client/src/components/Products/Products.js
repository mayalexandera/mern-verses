import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ProductList from "./ProductList";
import CategoryHeader from "../Category/CategoryHeader";
import * as actions from "../../store/actions";
import "./Products.css";

const Products = ({ message, fetchProducts, fetchCategories, products, byCategory }) => {
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [fetchProducts, fetchCategories]);

  return (
    <div className='product-container'>
      {products &&
        <CategoryHeader
          category='Clothing'
          sidebar={sidebar}
          setSidebar={setSidebar}
          count={products.length}
        />
   }
      { <div className='products-section'>
       { products && <ProductList message={message} sidebar={sidebar} setSidebar={setSidebar} />}
      </div> }
    </div>
  );
};
const mapStateToProps = ({ products: { products, message, byCategory } }) => {
  return { products, byCategory, message };
};

export default connect(mapStateToProps, actions)(Products);
