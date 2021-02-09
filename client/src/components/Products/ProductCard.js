import React from 'react'
import { NavLink } from "react-router-dom";

const ProductCard = (props) => {
  console.log(props)
  return (
    <>
     { props.product.images && <div className='product-grid-card'>
        <div className='product-card-body'>
         <figure>
           <NavLink to={`/products/${props.product._id}`} className='product-card-link-overlay'>
        <div className='product-card-image-wrapper'>
          <img alt={`${props.product.name}`} className='product-card-image' src={props.product.images.model1[0]}/>
        </div>
           </NavLink>
           <div className='product-card-info'>
             <div>
               <div className='product-card-titles'>
                 <div className='product-card-title'>{props.product.brandName}</div>
                 <div className='product-card-subtitle'>{props.product.name}</div>
               </div>
             </div>
             <div className='product-card-animation-wrapper'>
               <div className='product-card-price-wrapper'>
                 <div className='product-card-price'>
                   <div className='product-price-wrapper'>
                     <div className='product-card-current-price'>${props.product.price}</div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </figure>
      </div>
      </div>}
    
    </>);
};

export default ProductCard;