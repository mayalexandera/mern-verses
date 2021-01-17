import React from "react";
import { connect } from "react-redux";
import { deleteFavorite } from "../../store/actions";

const FavoriteCard = ({
  product: {
    _id,
    productId,
    name,
    brandName,
    price,
    featuredImage,
  },
  deleteFavorite,
}) => {
  const clickHandler = (e) => {
    e.preventDefault();
    deleteFavorite(_id);
  };
  return (
    <div className='favorite-item-wrapper'>
      <div className='favorite-item-body'>
        <a href={`/products/${productId}`}>
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
          <a href={`/products/${productId}`}>
            <p className='favorite-product-title'>{brandName}</p>
          </a>
          <p className='favorite-product-subtitle'>{name}</p>
        </div>
        <div className='favorite-product-detail-row'>
          <span className='favorite-product-price'>${price}</span>
        </div>
        <div className='favorite-list-grid-actions'>
          <button onClick={clickHandler} className='favorite-list-button'>
            <span>Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { deleteFavorite })(FavoriteCard);
