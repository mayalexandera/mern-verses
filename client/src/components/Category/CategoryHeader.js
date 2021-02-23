import React, { useState } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { sortByFilter } from "../../store/actions";
import Breadcrumbs from './Breadcrumbs'
import "./CategoryHeader.css";

const CategoryHeader = ({
  categoryName,
  sidebar,
  setSidebar,
  count,
  sortByFilter,
}) => {

  const sortByFilters = [
    { title: "Newest", key: "created", order: "date" },
    { title: "Price: Low-High", key: "price", order: "asc" },
    { title: "Price: High-Low", key: "price", order: "desc" },
  ];

  const [sortBy, setSortBy] = useState(false);
  const [selected, setSelected] = useState("");
  
  var valFilter = sortBy ? "expand_less" : "expand_more";

  const handleSideBar = () => {
    setSidebar(!sidebar);
  };

  const handleSelected = ({ title, order, key }) => {
    const request = { key: order, value: key };
    setSelected(title);
    setSortBy(!sortBy);
    sortByFilter(request);
  };

  const handleSortBy = () => {
    setSortBy(!sortBy);
  };

  const renderCategoryHeader = () => {
    
    return(
      <div className='wall-header-container'>
        <div className='wall-header-anchor-point'></div>
        <header className='wall-header'>
          <div className='wall-header__content'>
            <h1 className='wall-header__title'>
              {categoryName || 'Clothing'}
              <span className='wall-header__item-count'>{`(${count})` || 0 }</span>
            </h1>
            <nav className='wall-header__nav'>
              <button
                onClick={() => handleSideBar()}
                className='wall-header__filters-btn'
              >
                <span className='wall-header__filter_text'>
                  {sidebar ? "Hide Filters" : "Show Filters"}
                </span>
                <div className='icon-filters-wrapper'>
                  <div className='icon-filters' />
                </div>
              </button>
              <button
                className='mobile-filters-button'
                onClick={() => handleSideBar()}
              >
                <span className='mobile__wall-header__filter-text'>
                  {"Filters"}
                </span>
              </button>
              <div className='sort-by'>
                <div className='dropdown anchored--right'>
                  <button
                    onClick={() => handleSortBy()}
                    className='dropdown__btn'
                  >
                    <span className='dropdown__btn-text'>{"Sort By"}</span>
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
                                onClick={() => handleSelected(filter)}
                                className='dropdown__option'
                                name={filter.order}
                                value={filter.key}
                              >
                                {filter.title}
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
          {/* <Breadcrumbs/> */}
      </div>
    )
  };

  return <React.Fragment>{renderCategoryHeader()}</React.Fragment>;
};

const mapStateToProps = ({ products }) => {
  return { byCategory: products.byCategory,
  }
}

export default connect(null, { sortByFilter })(CategoryHeader);
