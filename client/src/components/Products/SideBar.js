import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import productFilters from "./productFilters";
import SideBarItem from "./SideBarItem";
import "./SideBar.css";

const SideBar = (props) => {
  const handleCategoryClick = (cat) => {
    props.fetchProdByCat(cat);
  };

  return (
    <div className='left-nav-wrapper'>
      <nav className='left-nav'>
          <div className='categories'>
            {props.categories
              && props.categories.map((cat, idx) => {
                  return (
                    <div
                      key={idx}
                      className='css-1t2ydyg categories__item'
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
              }
          </div>
        <div className='left-nav__filters'>
          <div className='filters css-1er76o1'>
            {productFilters.map((filter, index) => {
              return <SideBarItem key={index} filter={filter} />;
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = ({ products: { categories }}) => {
  return { categories };
};

export default connect(mapStateToProps, actions)(SideBar);
