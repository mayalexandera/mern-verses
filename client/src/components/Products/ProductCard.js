import React from 'react'
import { NavLink } from "react-router-dom";

const ProductCard = ({ product: { name, _id, price, brandName, images }}) => {

  return (
    <div className='product-grid-card'>
      <div className='product-card-body'>
       <figure>
         <NavLink to={`/products/${_id}`} className='product-card-link-overlay'>
      <div className='product-card-image-wrapper'>
        <img alt={`${name}`} className='product-card-image' src={images.model1[0]}/>
      </div>
         </NavLink>
         <div className='product-card-info'>
           <div>
             <div className='product-card-titles'>
               <div className='product-card-title'>{brandName}</div>
               <div className='product-card-subtitle'>{name}</div>
             </div>
           </div>
           <div className='product-card-animation-wrapper'>
             <div className='product-card-price-wrapper'>
               <div className='product-card-price'>
                 <div className='product-price-wrapper'>
                   <div className='product-card-current-price'>${price}</div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </figure>
    </div>
    </div>
  );
};

export default ProductCard;