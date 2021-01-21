import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import productFilters from "./productFilters";
import { Link } from "react-router-dom";
import SideBarAnimation from "./SideBarAnimation";
// import "./ProductSideBar.css";
import "./ProductSideBar.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import cx from "classnames";
import styled from "styled-components";



const ProductSideBar = (props) => {
  const handleCategoryClick = (cat) => {
    props.fetchProdByCat(cat);
  };

  const styles = {
    width: 192,
  }

  return (
    <div className='css-109b5m4 left-nav-wrapper css-1t5ayua'>
      <div className='left-nav__wrapper-top-point'></div>
      <nav style={styles} className='left-nav css-hrsjq4 css-xhk1pl'>
        <div className='point css-n99xye left-nav__top-point'></div>
        <div className='left-nav__categories'>
          <div className='categories css-10qr031'>
            {props.categories
              ? props.categories.map((cat, idx) => {
                  return (
                    <div
                      key={idx}
                      className='css-hrsjq4 css-xhk1pl css-1t2ydyg categories__item  is--button'
                    >
                      <Link
                        onClick={() => handleCategoryClick(cat)}
                        to={`/product/list/` + cat}
                      >
                        {cat}
                      </Link>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
        <div className='left-nav__filters'>
          <div className='filters css-1er76o1'>
            
              {productFilters.map((filter, index) => {
                return <SideBarAnimation key={index} filter={filter} />;
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
