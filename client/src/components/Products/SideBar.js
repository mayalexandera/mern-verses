import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import * as actions from "../../store/actions";
import productFilters from "./productFilters";
import SideBarItem from './SideBarItem'
import "./ProductSideBar.css";


const SideBar = (props) => {
  const handleCategoryClick = (cat) => {
    props.fetchProdByCat(cat);
  };

  const styles = {
    width: 192,
  }

  return (
    <div className='css-109b5m4 left-nav-wrapper'>
      <div className='left-nav__wrapper-top-point'></div>
      <nav style={styles} className='left-nav css-hrsjq4 css-xhk1pl'>
        <div className='point left-nav__top-point'></div>
        <div className='left-nav__categories'>
          <div className='categories'>
            {props.categories
              ? props.categories.map((cat, idx) => {
                  return (
                    <div
                      key={idx}
                      className='css-hrsjq4 css-xhk1pl css-1t2ydyg categories__item'
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
                return <SideBarItem key={index} filter={filter} />;
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

export default connect(mapStateToProps, actions)(SideBar);