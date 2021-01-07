import React from 'react'
import { NavLink } from "react-router-dom";

const ProductCard = ({ product: { name, _id, price, brandName, images }}) => {

  return (
    <div className='product-card-wrapper'>
      <div className='product-card-body'>
        <div className='product-card-content-wrapper'>
          <div className='product-photo-wrapper'>
            <NavLink to={`/products/${_id}`}>
              <img alt={name} src={images.model1[0]} />
            </NavLink>
          </div>
          <React.Fragment>
            <div className='product-card-details'>
              <p className='product-title'>
                <strong>{brandName}</strong>
              </p>
              <p className='product-subtitle'>{name}</p>
              <p className='product-subtitle'>${price}</p>
            </div>
          </React.Fragment>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;