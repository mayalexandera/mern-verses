import React, { useState } from "react";
import DropdownList from "./DropdownList";
import GreetingButton from "./GreetingButton";
import "./Dropdown.css";
import DropdownMemberList from "./DropdownMemberList";
import AccountSubMenuList from "./AccountSubMenuList";

const DropdownContainer = ({ showDropdown }) => {
  console.log("dropdown");


  const [selected, setSelected] = useState(false)
  const showAccount = () => {
    setSelected(!selected)
  }
  return (
      <div className='dropdown-container'>
        <div className='dropdown-wrapper'>
          { !selected && <div className='dropdown-body'>
            <GreetingButton showAccount={ showAccount } /> 
            <DropdownList showDropdown={showDropdown} />
            <DropdownMemberList />
          </div> }
           { selected && <AccountSubMenuList showAccount={ showAccount } showDropdown={showDropdown}/>}
        </div>
      </div>
  );
};

export default DropdownContainer;
