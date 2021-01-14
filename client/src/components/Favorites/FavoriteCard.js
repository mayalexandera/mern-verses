import React from "react";
import { connect } from "react-redux";
import { deleteFavorite } from '../../actions'

const FavoriteCard = ({product: {_id, sizeId, product, name, brandName, price, size, featuredImage }, deleteFavorite}) => {
  const clickHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    deleteFavorite(e.target.value)
  };
  return (
    <div className='favorite-card-wrapper'>
      <div className='favorite-card-body'>
        <div className='favorite-photo-wrapper'>
          <img alt={name} src={featuredImage} />
        </div>
        <React.Fragment>
          <div className='favorite-card-details'>
            <div className='favorite-card-product-details'>
              <p className='favorite-title'>
                <strong>{brandName}</strong>
              </p>
              <p className='favorite-subtitle'>{name} - {size}</p>
              <p className='favorite-subtitle'>${price}</p>
            </div>
            <div className='favorite-actions'>
              <button
                value={_id}
                id='favorite-card-button'
                onClick={(e) => clickHandler(e)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </React.Fragment>
      </div>
    </div>
  );
};

// export default FavoriteCard;
export default connect(null, { deleteFavorite })(FavoriteCard);
