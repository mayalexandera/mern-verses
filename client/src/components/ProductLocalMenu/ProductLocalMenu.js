import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Link } from "react-router-dom";

import "./ProductLocalMenu.css";

const ProductLocalMenu = (props) => {

  useEffect(() => {
    props.fetchCategories()
  }, [props.fetchCategories])

  const handleCategoryClick = (cat) => {
    console.log(cat);
    props.fetchProdByCat(cat);
  };

  return (
    <div className='local_menu-wrapper'>
      <div className='local_menu grid-row'>
        <div className='local_menu grid-col col-lg-12'>
          <div>
            <div className='sticky-outer-wrapper'>
              <div className='sticky-inner-wrapper'>
                <div className='sticky-menu container fixed-fluid'>
                  <div className='sub-menu'>
                    <ul className='sub-menu-list'>
                      {props.categories ? props.categories.map((cat, idx) => {
                        return (
                          <li key={idx}>
                            <Link
                              onClick={() => handleCategoryClick(cat)}
                              to={`/product/list/` + cat}
                            >
                              {cat}
                            </Link>
                          </li>
                        );
                      }): null}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { categories: state.products.categories };
};

export default connect(mapStateToProps, actions)(ProductLocalMenu);
