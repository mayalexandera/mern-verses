import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import ProductList from "./ProductList";
import CategoryHeader from "../Category/CategoryHeader";
import * as actions from "../../store/actions";
import "./Products.css";

const Products = ({
  message,
  fetchProducts,
  fetchCategories,
  products,
  byCategory,
}) => {
  const [sidebar, setSidebar] = useState(true);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [fetchProducts, fetchCategories]);

  console.log(products);

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
            {products || byCategory ? (
              <ProductList
                message={message}
                sidebar={sidebar}
                setSidebar={setSidebar}
                products={products || byCategory}
              />
            ) : null}
          </div>
        }
      </div>
    </Fragment>
  );
};
const mapStateToProps = ({ products: { products, message, byCategory } }) => {
  return { products, byCategory, message };
};

export default connect(mapStateToProps, actions)(Products);
