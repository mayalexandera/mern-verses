import React from "react";

const DropdownRow = ({ item, i }) => {
  return (
    <div className='dropdown-row'>
      <a>
        <button key={i} className='dropdown-button'>
          <div className='dropdown_col'>
            <p>{item}</p>
          </div>
        </button>
        {/* <span className='material-icons-round'>navigate_next</span> */}
      </a>
    </div>
  );
};

export default DropdownRow;
