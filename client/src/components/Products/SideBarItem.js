import React, { useState } from "react";
import styled from "styled-components";
import ToggleButton from "./ToggleButton";

const Collapsible = styled.div`
  height: auto;
  transition: height 1500ms linear 0s;
  overflow: hidden;
`;

const CollapsibleContent = styled.div`
  transition: height 1500ms linear 0s;
  margin-top: 5px;
  padding-bottom: 20px;
`;

const SideBarItem = ({ filter }) => {
  const [expanded, setExpanded] = useState(true);

  let chevronDirection = expanded ? "expand_less" : "expand_more";
  let animate = expanded ? "auto" : "0px";

  const handleToggle = () => {
   setExpanded(!expanded) 
  };

  const renderSideBarITem = () => {
    if (filter && filter) {
      return (
        <>
        <div className='filter-group'>
            <span className='filter-group__btn'>
              <div onClick={handleToggle} className="trigger-content">
                {" "}
                <div className='trigger-content__label'>{filter.title}</div>
                <div
                  className=
                    "icon-chevron"
                >
                  <span className="material-icons">
                    {chevronDirection}
                  </span>
                </div>
              </div>
            </span>
            <Collapsible
              className="filter-group__outer"
              style={{ height: `${animate}` }}
            >
              <CollapsibleContent className='filter-group__content'>
                <div>
                  {filter.options.map((filter, index) => {
                    return (
                      <button
                        key={index}
                        className='css-1t2ydyg filter-item css-11bod12 '
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
