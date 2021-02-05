import React, { useState } from "react";
import cx from "classnames";
import styled from "styled-components";
import ToggleButton from "./ToggleButton";
import "./SideBar.css";
const Collapsible = styled.div`
  height: auto;
  transition: height 150ms linear 0s;
  overflow: hidden;
`;

const CollapsibleContent = styled.div`
  transition: height 1500ms linear 0s;
  margin-top: 5px;
  padding-bottom: 20px;
`;

const SideBarItem = ({ filter, index }) => {
  const [expanded, setExpanded] = useState(true);

  let groupToggle = expanded ? "__open" : "__closed";
  let triggerToggle = expanded ? " is-open " : (triggerToggle += " is-closed");
  let chevronToggle = expanded ? " is--hidden" : " is--up";
  let chevronDirection = expanded ? "expand_less" : "expand_more";
  let animate = expanded ? "auto" : "0px";

  const handleToggle = () => {
    !!expanded ? setExpanded(false) : setExpanded(true);
  };

  const renderSideBarITem = () => {
    if (filter && filter) {
      return (
        <>
          <div className={cx("filter-group filter-group", groupToggle)}>
            <span className={cx("filter-group__btn", triggerToggle)}>
              <div onClick={handleToggle} className={"trigger-content"}>
                {" "}
                <div className='trigger-content__label'>{filter.title}</div>
                <div
                  className={cx(
                    "icon-chevron css-1apc7vz css-1apc7vz",
                    chevronToggle
                  )}
                >
                  <span className={cx("material-icons")}>
                    {chevronDirection}
                  </span>
                </div>
              </div>
            </span>
            <Collapsible
              className={"filter-group__outer"}
              style={{ height: `${animate}` }}
            >
              <CollapsibleContent className='filter-group__content'>
                <div>
                  {filter.options.map((filter, index) => {
                    return (
                      <button
                        key={index}
                        className='css-xhk1pl css-1t2ydyg filter-item css-11bod12 '
                      >
                        <ToggleButton filter={filter} />
                        <span className='filter-item__item-label'>
                          {filter.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </>
      );
    }
  };
  return <>{renderSideBarITem()}</>;
};

export default SideBarItem;
