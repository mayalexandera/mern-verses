import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import cx from "classnames";
import "./ProductAnimation.css";
import styled from "styled-components";

const SideBarAnimation = ({ filter, index }) => {
  const [expanded, setExpanded] = useState(true);

  const [checked, setChecked] = useState(false);

  const Collapsible = styled.div`
    height: auto;
    transition: height 150ms linear 0s;
    overflow: hidden;
  `;

  const Collapsible__trigger = styled.span`
    display: block;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
  `;

  const Collapsible__contentInner = styled.div`
    transition: height 1500ms linear 0s;
    margin-top: 5px;
    padding-bottom: 20px;
  `;

  const handleToggle = () => {
    !!expanded ? setExpanded(false) : setExpanded(true);
  };

  const handleCheck = () => {
    !!checked ? setChecked(false) : setChecked(true);
  };

  const handleCheckmark = () => {
    !!checked ? setChecked(false) : setChecked(true);
  };

  var groupToggle = "filter-group filter-group";
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

  var validateCheck = checked ? " is--checked" : null;
  var checkmark = checked ? "is--toggled" : null;

  // var filterGroupOuter = expanded
  //   ? "height: auto; transition: none 0s ease 0s; overflow: hidden;"
  //   : "height: 0px; transition: height 150ms linear 0s; overflow: hidden;";

  return (
    <>
      <div className={cx("filter-group", groupToggle)}>
        <span className={cx(triggerToggle)}>
          <div onClick={handleToggle} className={"trigger-content"}>
            {" "}
            <div className='trigger-content__label'>
              {filter && filter ? filter.title : null}
            </div>
            <div className={cx("icon-chevron css-1apc7vz", chevronToggle)}>
              <span className={cx("material-icons")}>{chevronDirection}</span>
            </div>
          </div>
        </span>
        {/* begnning of list items */}
        <Collapsible
          className={cx("filter-group__outer")}
          style={{ height: `${animate}` }}
        >
          <Collapsible__contentInner className='filter-group__content  css-1az01ki'>
            <div>
              {filter && filter
                ? filter.options.map((filter, index) => {
                    return (
                      <button
                        key={index}
                        className='css-hrsjq4 css-xhk1pl css-1t2ydyg filter-item is--default css-11bod12  is--button'
                      >
                        <div
                        id={index}
                          onClick={handleCheck}
                          className={cx(
                            "pseudo-checkbox css-1n9lta1 ",
                            validateCheck
                          )}
                        >
                          <div
                            // onClick={handleCheck}
                            className={cx(
                              "icon-checkmark css-1iktvq5",
                              validateCheck
                            )}
                          >
                            <div
                              // onClick={handleCheckmark}
                              className={
                                ("icon-checkmark css-1iktvq5", checkmark)
                              }
                            ></div>
                          </div>
                        </div>
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

export default SideBarAnimation;
