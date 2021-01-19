import React from 'react'


const GuestWishlist = () => {
  return (
    <div className='cart-favorites-container'>
      <div className='cart-favorites'>
        <div className='col-sm-12' id='cart-favorite-item'>
          <h4>Favorites</h4>
        </div>
        <div className='col-sm-12' id='cart-favorite-item'>
          <div className='guest-wishlist'>
            <p>{"Want to view your favorites? "}</p>&nbsp;
            <p>{" Join us"}</p>&nbsp;<p>or</p>&nbsp;<p>Sign-in</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestWishlist;