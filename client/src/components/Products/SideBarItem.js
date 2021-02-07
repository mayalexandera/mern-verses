import React, { useState } from "react";
import ToggleButton from "./ToggleButton";

const SideBarItem = ({ filter }) => {
  const [expanded, setExpanded] = useState(true);

  let chevronDirection = expanded ? "expand_less" : "expand_more";
  let animate = expanded ? "auto" : "0px";

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const renderSideBarItem = () => {
      return (
        <>
          {filter && <div className='filter-group'>
            <div onClick={handleToggle} className='trigger-content'>
              {" "}
              <p>{filter.title}</p>
              <div className='icon-chevron'>
                <span className='material-icons'>{chevronDirection}</span>
              </div>
            </div>
            <div
              className='filter-group__list-outer'
              style={{ height: `${animate}` }}
            >
              <div className='filter-group__list-wrapper'>
                {filter.options.map((filter, index) => (
                  <ToggleButton key={index} {...filter} />
                ))}
              </div>
            </div>
          </div>}
        </>
      );

  };
  return <>{renderSideBarItem()}</>;
};

export default SideBarItem;
