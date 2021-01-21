import React, { useState } from "react";
import cx from "classnames";
import "./SideBar.css";

const ToggleButton = (filter) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  var toggleCheck = !!checked ? " is--checked" : "";

  return (
    <div
      onClick={() => handleClick(filter.name)}
      className={cx("pseudo-checkbox css-1n9lta1", toggleCheck)}
    >
      <div className={cx("icon-checkmark css-1iktvq5", toggleCheck)}>
        <div className={"icon-checkmark css-1iktvq5"}>
          <span id='checkmark' className='material-icons'>
            done
          </span>
        </div>
      </div>
    </div>
  );
};

export default ToggleButton;