import React from "react";

const ProductSideBarItem = ({ filter }) => {
  return (
    <div className='collapsible filter-group filter-group__open'>
      <span className='collapsible__trigger is-open filter-group__btn headline-5 is--open'>
        <div className='trigger-content'>
          <div className='trigger-content__label'>
            {filter.title}
            <div className='filter-group__count is--hidden'>{"(0)"}</div>
          </div>
          <div className='left-nav-chevron css-1ap is--up'>
            <span class='material-icons'>expand_less</span>
          </div>
        </div>
      </span>
      <div className='collapsible__content filter-group__outer'>
        <div className='collapsible__content filter-group__content'>
          <div className='filter-group__items-group'>
            {filter.options.map((filter, index) => {
              return (
                <a key={index} className='filter-item'>
                  <div className='pseudo-checkbox'>
                    <div className='icon-wrapper'></div>
                  </div>
                  <span className='filter-item__item-label'>{filter}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSideBarItem;
