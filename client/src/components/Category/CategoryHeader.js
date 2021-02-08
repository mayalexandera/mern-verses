import React, { useState } from "react";
// import { connect } from "react-redux";
import { CSSTransition } from 'react-transition-group'
// import * as actions from "../../store/actions";
import "./CategoryHeader.css";

const CategoryHeader = ({ category, sidebar, setSidebar, count }) => {

  const sortByFilters = ["Featured", "Newest", "Price: Low-High", "Price: High-Low"]

  const [ sortBy, setSortBy] = useState(false)
  const [ selected, setSelected ] = useState("")

  const handleSideBar = () => {
    setSidebar(!sidebar)
  }

    var valFilter =  sortBy ? "expand_less" : "expand_more"


  const handleSelected = (e) => {
    console.log("in handleSelected")
    setSelected(e.target.value)
    setSortBy(!sortBy)
  }

  const handleSortBy = () => {
    console.log("handleSortBy")
    setSortBy(!sortBy)
  }
  const renderCategoryHeader = () => {
    console.log(sidebar)
    return category && category ? (
      <div className='wall-header-container'>
        <header className='wall-header'>
          {/* <div className='wall-breadcrumbs'>
          <ol className='wall-breadcrumbs__list'>
          </ol>
        </div> */}
          <div className='wall-header__content'>
            <h1 className='wall-header__title'>
              {category}
              <span className='wall-header__item-count'>{`(${count})`}</span>
            </h1>
            <nav className='wall-header__nav'>
              <button
                onClick={() => handleSideBar()}
                className='wall-header__filters-btn'
              >
                <span className='wall-header__filter_text'>Hide Filters</span>
                <div className='icon-filters'></div>
              </button>
              <div className='sort-by'>
                <div className='dropdown anchored--right'>
                  <button
                    onClick={() => handleSortBy()}
                    className='dropdown__btn'
                  >
                    <span className='dropdown__btn-text'>{"Sort By: "}</span>
                    <span className='dropdown__btn-selected-text'>
                      {selected}
                    </span>
                    <div className={`icon-chevron`}>
                      <i className='material-icons-outlined'>{valFilter}</i>
                    </div>
                  </button>
                  {
                    <div className='dropdown__options-wrapper'>
                      <CSSTransition
                        classNames='dropdown-transition'
                        in={sortBy}
                        timeout={500}
                        appear
                        unmountOnExit
                      >
                        <div
                          className='dropdown__options-list'
                          id='sort-options'
                        >
                          {sortByFilters.map((filter, index) => {
                            return (
                              <button
                                key={index}
                                onClick={(e) => handleSelected(e)}
                                className='dropdown__option'
                                value={filter}
                              >
                                {filter}
                              </button>
                            );
                          })}
                        </div>
                      </CSSTransition>
                    </div>
                  }
                </div>
              </div>
            </nav>
          </div>
        </header>
        <div className='wall-header-spacer' />
      </div>
    ) : null;
  };

  return <React.Fragment>{renderCategoryHeader()}</React.Fragment>;
};

export default (CategoryHeader);
