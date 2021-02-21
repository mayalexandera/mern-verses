import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { CSSTransition } from "react-transition-group";
import productFilters from "./productFilters";
import SideBarItem from "./SideBarItem";
import "./SideBar.css";

const SideBar = ({ categories, fetchProdByCat, sidebar }) => {
  const categoryClick = (categoryId, products) => {
    fetchProdByCat(categoryId, products);
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
              categories.map((category, _id) => (
                <div key={_id} className='categories__item'>
                  <Link
                    onClick={() => categoryClick(category._id, category.products )}
                    to={`/product/${category.name}/list`}
                  >
                    {category.name}
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
