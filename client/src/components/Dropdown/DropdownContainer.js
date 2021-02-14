import React from "react";
import DropdownList from "./DropdownList";
import GreetingButton from "./GreetingButton";
import "./Dropdown.css";
import DropdownMemberList from "./DropdownMemberList";
import AccountSubMenuList from "./AccountSubMenuList";

const DropdownContainer = () => {
  console.log("dropdown");
  const array = ["Clothing", "Accessories", "Plans"];
  return (
    <div className='dropdown-container'>
      <div className='dropdown-wrapper'>
        <div className='dropdown-body'>
          <GreetingButton /> 
          <DropdownList items={array} />
          <DropdownMemberList />
          {/* <AccountSubMenuList/> */}
        </div>
      </div>
    </div>
  );
};

export default DropdownContainer;
