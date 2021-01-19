import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import productFilters from "./productFilters";
import { Link } from "react-router-dom";
import ProductSideBarItem from "./ProductSideBarItem";
import "./ProductSideBar.css";

const ProductSideBar = (props) => {
  // useEffect(() => {
  //   props.fetchCategories();
  // }, [props]);

  const handleCategoryClick = (cat) => {
    console.log(cat);
    props.fetchProdByCat(cat);
  };

  return (
    <div className='product-sidebar-wrapper product-sidebar'>
      <div className='product-sidebar__wrapper-top-point product-nav-transition'></div>
      <nav className='product-sidebar-nav'>
        <div className='product-sidebar-nav__top-point product-toggle'></div>
        <div className='product-sidebar-nav__categories'>
          <div className='categories'>
            {props.categories
              ? props.categories.map((cat, idx) => {
                  return (
                    <li key={idx} className='categories-item cat-style'>
                      <Link
                        onClick={() => handleCategoryClick(cat)}
                        to={`/product/list/` + cat}
                      >
                        {cat}
                      </Link>
                    </li>
                  );
                })
              : null}
          </div>
        </div>
        <div className='left-nav__filters'>
          <div className='filters css-er'>
            {productFilters.map((filter, index) => {
              return <ProductSideBarItem key={index} filter={filter} />;
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { categories: state.products.categories };
};

export default connect(mapStateToProps, actions)(ProductSideBar);