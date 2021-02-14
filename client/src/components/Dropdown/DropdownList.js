import React from 'react' 
import DropdownRow from './DropdownRow'

const DropdownList = ({items}) => {
  return (
    <div>
      {items.map((item, i) => <DropdownRow key={i} item={item}/>)}

    </div>
  )
}

export default DropdownList;