import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

const ToggleButton = ({ fetchProdByFilter, name, type, value }) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
    const val = !checked;
    if (val) fetchProdByFilter({ name, type, value, val });
  };

  var toggleCheck = !!checked ? " is--checked" : "";

  return (
    <div className='' onClick={() => handleClick()}>
      <div className={`pseudo-checkbox ${toggleCheck}`}>
        <div className={`icon-checkmark ${toggleCheck}`}>
          <div className='icon-checkmark'>
            <span id='checkmark' className='material-icons'>
              done
            </span>
          </div>
        </div>
      </div>
      {name}
    </div>
  );
};

export default connect(null, actions)(ToggleButton);
