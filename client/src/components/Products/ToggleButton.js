import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import cx from "classnames";
import "./SideBar.css";

const ToggleButton = (props) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
    props.fetchProdByFilter( props.filter )
  };

  var toggleCheck = !!checked ? " is--checked" : "";

  return (
    <div
      onClick={() => handleClick(props.filter.value)}
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

export default connect(null, actions)(ToggleButton);
