import React from 'react' 
import DropdownRow from './DropdownRow'

const DropdownList = ({ showDropdown }) => {
      const list = [
        { title: "Clothing", path: "/products" },
        { title: "Accessories", path: "/products" },
        { title: "Plans", path: "/plans" },
      ];
  return (
    <div>
      {list.map((item, i) => <DropdownRow showDropdown={showDropdown} key={i} item={item}/>)}

    </div>
  )
}

export default DropdownList;