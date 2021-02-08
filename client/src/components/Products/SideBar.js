import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { CSSTransition } from "react-transition-group";
import productFilters from "./productFilters";
import SideBarItem from "./SideBarItem";
import "./SideBar.css";

const SideBar = ({ categories, fetchProdByCat, sidebar }) => {
  const categoryClick = (cat) => {
    fetchProdByCat(cat);
  };

  return (
    <CSSTransition
      timeout={500}
      unmountOnExit
      appear
      in={sidebar}
      classNames='filter-transition'
    >
      <div className='left-nav-wrapper'>
        <div className='left-nav'>
          <div className='categories'>
            {categories &&
              categories.map((cat, idx) => (
                <div key={idx} className='categories__item'>
                  <Link
                    onClick={() => categoryClick(cat)}
                    to={`/product/list/${cat}`}
                  >
                    {cat}
                  </Link>
                </div>
              ))}
          </div>
          <div>
            {productFilters.map((filter, index) => (
              <SideBarItem key={index} filter={filter} />
            ))}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

const mapStateToProps = ({ products: { categories } }) => {
  return { categories };
};

export default connect(mapStateToProps, actions)(SideBar);
