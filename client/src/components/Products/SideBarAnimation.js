import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import cx from "classnames";
import styled from "styled-components";

const SideBarAnimation = ({ filter, index }) => {
  const [expanded, setExpanded] = useState(true);

  const Collapsible = styled.div`
    width: 100%;
    text-align: left;
    padding: 0px;
    border-bottom: 1px solid rgb(229, 229, 229);
    display: block;
    line-height: 28px;
  `;

  const Collapsible__trigger = styled.span`
    display: block;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
  `;

  const Collapsible__contentOuter = styled.div`
    display: block;
  `;

  const handleToggle = () => {
    !!expanded ? setExpanded(false) : setExpanded(true);
  };

  var groupToggle = "filter-group";
  expanded ? (groupToggle += "__open") : (groupToggle += "__closed");

  var triggerToggle = "filter-group__btn";
  expanded ? (triggerToggle += " is-open ") : (triggerToggle += " is-closed ");

  var triggerContent = "trigger-content";

  var filterGroupCount = "filter-group__count";
  expanded
    ? (filterGroupCount += " is--open")
    : (filterGroupCount += " is--closed");

  var isHidden = "";
  expanded ? (isHidden += " is--up") : (isHidden += " is--hidden");

  var chevronToggle = "css-1apc7vz";
  expanded ? (chevronToggle += " is--hidden") : (chevronToggle += " is--up");

  var chevronDirection = expanded ? "expand_less" : "expand_more";

  var animate = expanded ? "auto" : "0px";

  return (
    <>
      <Collapsible onClick={handleToggle} className={cx('filter-group', groupToggle)}>
        <Collapsible__trigger
          onClick={handleToggle}
          className={cx(triggerToggle)}
        >
          <div className={triggerContent}>
            {" "}
            <div className='trigger-content__label'>
              {filter && filter ? filter.title : null}
              <div className={cx(filterGroupCount, isHidden)}></div>
              <div className={cx("left-nav-chevron", chevronToggle)}>
                <span className={cx("material-icons")}>{chevronDirection}</span>
              </div>
            </div>
          </div>
        </Collapsible__trigger>
        <Collapsible__contentOuter
          className={cx("filter-group__outer")}
          style={{ height: `${animate}` }}
        >
          <div className={cx("filter-group__content")}>
            <div className='filter-group__items-group'>
              {filter && filter
                ? filter.options.map((filter, index) => {
                    return (
                      <div key={index} className='filter-item'>
                        <div className='pseudo-checkbox'>
                          <div className='icon-wrapper'>
                            <span className='filter-item__item-label'>
                              {filter}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </Collapsible__contentOuter>
      </Collapsible>
    </>
  );
};

export default SideBarAnimation;
