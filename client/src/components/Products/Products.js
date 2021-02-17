import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import ProductList from "./ProductList";
import CategoryHeader from "../Category/CategoryHeader";
import * as actions from "../../store/actions";
import "./Products.css";

const Products = ({ message, fetchProducts, fetchCategories, products }) => {
  const [sidebar, setSidebar] = useState(true);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [fetchProducts, fetchCategories]);
  return (
    <Fragment>
      {products && (
        <CategoryHeader
          category='Clothing'
          sidebar={sidebar}
          setSidebar={setSidebar}
          count={products.length}
        />
      )}
      <div className='product-container'>
        {
          <div className='products-section'>
            {products && (
              <ProductList
                message={message}
                sidebar={sidebar}
                setSidebar={setSidebar}
                products={products}
              />
            )}
          </div>
        }
      </div>
    </Fragment>
  );
};
const mapStateToProps = ({ products: { products, message } }) => {
  return { products, message };
};

export default connect(mapStateToProps, actions)(Products);
