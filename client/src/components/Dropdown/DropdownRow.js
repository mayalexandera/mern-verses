import React from "react";
import { NavLink } from "react-router-dom";

const DropdownRow = ({ item, i, showDropdown }) => {
  return (
    <div key={i} className='dropdown-row'>
      <NavLink
        className='dropdown-button'
        onClick={showDropdown}
        to={item.path}
      >
        <div className='dropdown_col'>
          <p>{item.title}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default DropdownRow;
