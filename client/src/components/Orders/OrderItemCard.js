import React from 'react'  

const OrderItemCard = ({ item, index }) => {
  console.log('orderItemCard')
  return (
    <div className='order-item-card-container' key={index}>{item.productId.name}</div>
  )
}

export default OrderItemCard