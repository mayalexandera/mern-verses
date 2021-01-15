import React from "react";
import { connect } from "react-redux";
import { deleteFavorite } from "../../store/actions";

const FavoriteCard = ({
  product: {
    _id,
    sizeId,
    product,
    name,
    brandName,
    price,
    size,
    featuredImage,
  },
  deleteFavorite,
}) => {
  const clickHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    deleteFavorite(e.target.value);
  };
  return (
    <div className='favorite-item-wrapper'>
      <div className='favorite-item-body'>
        <a>
          <div className='favorite-item-thumbnail-wrapper'>
            <div className='heart-wishlist-button-wrapper'>
              <button className='heart-wishlist-button'>
                <span class='material-icons'>favorite</span>
              </button>
            </div>
            <div className='image-spacer'></div>
            <img src={featuredImage} className='favorite-item-thumbnail'></img>
          </div>
        </a>
      </div>
      <div className='favorite-product-details-wrapper'>
        <div className='favorite-product-details'>
          <a>
            <p className='favorite-product-title'>{brandName}</p>
          </a>
          <p className='favorite-product-subtitle'>{name}</p>
        </div>
        <div className='favorite-product-detail-row'>
          <span className='favorite-product-price'>${price}</span>
        </div>
        <div className='favorite-list-grid-actions'>
          <button className='favorite-list-button'>
            <span>Select Size</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { deleteFavorite })(FavoriteCard);
