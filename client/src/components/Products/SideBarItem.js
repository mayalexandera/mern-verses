import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import cx from "classnames";
import styled from "styled-components";
import ToggleButton from "./ToggleButton";
import "./SideBar.css";

const SideBarItem = ({ filter, index }) => {
  const [expanded, setExpanded] = useState(true);

  const Collapsible = styled.div`
    height: auto;
    transition: height 150ms linear 0s;
    overflow: hidden;
  `;

  const Collapsible__contentInner = styled.div`
    transition: height 1500ms linear 0s;
    margin-top: 5px;
    padding-bottom: 20px;
  `;

  var groupToggle = expanded ? "__open" :  "__closed";
  var triggerToggle =  expanded ? " is-open " : triggerToggle += " is-closed";
  var chevronToggle = expanded ?  " is--hidden" :  " is--up";
  var chevronDirection = expanded ? "expand_less" : "expand_more";
  var animate = expanded ? "auto" : "0px";

    const handleToggle = () => {
      !!expanded ? setExpanded(false) : setExpanded(true);
    };

  return (
    <>
      <div className={cx("filter-group filter-group", groupToggle)}>
        <span className={cx("filter-group__btn",triggerToggle)}>
          <div onClick={handleToggle} className={"trigger-content"}>
            {" "}
            <div className='trigger-content__label'>
              {filter && filter ? filter.title : null}
            </div>
            <div
              className={cx(
                "icon-chevron css-1apc7vz css-1apc7vz",
                chevronToggle
              )}
            >
              <span className={cx("material-icons")}>{chevronDirection}</span>
            </div>
          </div>
        </span>
        <Collapsible
          className={cx("filter-group__outer")}
          style={{ height: `${animate}` }}
        >
          <Collapsible__contentInner className='filter-group__content'>
            <div>
              {filter && filter
                ? filter.options.map((filter, index) => {
                    return (
                      <button className='css-xhk1pl css-1t2ydyg filter-item css-11bod12 '>
                        <ToggleButton filter={filter} />
                        <span className='filter-item__item-label'>
                          {filter}
                        </span>
                      </button>
                    );
                  })
                : null}
            </div>
          </Collapsible__contentInner>
        </Collapsible>
      </div>
    </>
  );
};

export default SideBarItem;