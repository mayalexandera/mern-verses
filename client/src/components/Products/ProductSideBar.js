import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import productFilters from "./productFilters";
import { Link } from "react-router-dom";
import ProductSideBarItem from "./ProductSideBarItem";
import SideBarAnimation from "./SideBarAnimation";
import "./ProductSideBar.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ProductSideBar = (props) => {
  const handleCategoryClick = (cat) => {
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
                    <li key={idx} className='categories-item cat-style '>
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
            <ul>
              {productFilters.map((filter, index) => {
                return <SideBarAnimation key={index} filter={filter} />;
              })}
            </ul>
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
