import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import productFilters from "./productFilters";
import SideBarItem from "./SideBarItem";
import "./SideBar.css";

const SideBar = ({ categories, fetchProdByCat }) => {
  const categoryClick = (cat) => {
    fetchProdByCat(cat);
  };

  return (
    <div className='left-nav-wrapper'>
      <nav className='left-nav'>
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
          {productFilters.map((filter, index) => <SideBarItem key={index} filter={filter} />
          )}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = ({ products: { categories } }) => {
  return { categories };
};

export default connect(mapStateToProps, actions)(SideBar);
