import React, { useEffect } from "react";

import './CategoryHeader.css'

const CategoryHeader = (props) => {

  return (
    <div className='wall-header-container'>
      <header className='wall-header'>
        {/* <div className='wall-breadcrumbs'>
          <ol className='wall-breadcrumbs__list'>
          </ol>
        </div> */}
        <div className='wall-header__content'>
          <h1 className='wall-header__title'>
            {props.category}
            <span className='wall-header__item-count'>{`  (${props.count})`}</span>
          </h1>
          <nav className='wall-header__nav'>
            <button className='wall-header__filters-btn'>
              <span className='wall-header__filter_text'>Hide Filters</span>
              <div className='icon-filters'>

              </div>
            </button>
            <div className='sort-by'>
              <div className='dropdown anchored--right'>
                <div className='overlay'></div>
                <button className='dropdown__btn'>
                  <span className='dropdown__btn-text'>Sort By</span>
                  <span className='dropdown__btn-selected-text'></span>
                  <div className='icon-chevron'>

                  </div>
                </button>
                {/* <div classNAme='dropdown__options-wrapper'>
                  <div className='dropdown__options-list' id='sort-options'>
                    <button className='dropdown__option'>Featured</button>
                    <button className='dropdown__option'>Newest</button>
                    <button className='dropdown__option'>Price: High-Low</button>
                    <button className='dropdown__option'>Price: Low-High</button>
                  </div>
                </div> */}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default (CategoryHeader);
