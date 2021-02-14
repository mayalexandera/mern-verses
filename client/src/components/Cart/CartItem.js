import React from "react";
import { NavLink } from 'react-router-dom'

const CartItem = ({ item, deleteCartItem, updateCartItem }) => {
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8];

  const deleteCartItemHandler = () => deleteCartItem(item._id);

  const updateHandler = (e) => {
    updateCartItem(e.target.id, e.target.value, item);
  };

  console.log(item)
  return (
    <div className='cart-item-wrapper'>
      <div className='cart-item-card-body'>
        <figure className='cart-item-product-thumbnail'>
         <NavLink className='thumbnail' to={`/products/${item._id}`}>
              <img alt={item.name} src={item.featuredImage} />
         </NavLink>
        </figure>
        <div className='cart-item-product-details-wrapper'>
          <div className='cart-item-product-details'>
            <div className='product-detail-row cart-item-product-brandName'>
              {item.brandName}
            </div>
            <div className='product-detail-row'>{item.name}</div>

            <div className='cart-item-product-options-row'>
              <div className='size-element-cell'>
                <label>Size</label>
                <div className='size-select-wrapper'>
                  <span className='material-icons-outlined'>
                    keyboard_arrow_down
                  </span>
                  <select
                    value={item.sizeId && item.sizeId._id}
                    id={"sizeId"}
                    className='size-select'
                    onChange={updateHandler}
                  >
                    { item.productId.productSizes.map((size) => {
                      return (
                        <option key={size._id} value={size._id}>
                          {size.size}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className='size-element-cell'>
                <label>Quantity</label>
                <div className='size-select-wrapper'>
                  <div>
                    <span className='material-icons-outlined'>
                      keyboard_arrow_down
                    </span>
                  </div>
                  <select
                    id={"count"}
                    value={item.count}
                    className='size-select'
                    onChange={updateHandler}
                  >
                    {quantities.map((num) => {
                      return (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className='price'>
            <span>
              <span>
                <span className='original-price'>${item.price}</span>
                <span className='sale-price'>${item.price}</span>
              </span>
            </span>
          </div>
        </div>
        <div className='cart-item-button-container'>
          <ul className='cart-item-button-list'>
            <li>
              <button
                name='move-to-favorites-button'
                className='cart-item-button'
              >
                Move To Favorites
              </button>
            </li>
            <li>
              <button
                name='remove-item-button'
                className='cart-item-button'
                onClick={deleteCartItemHandler}
              >
                Remove
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className='shipping-info'>
        <div className='shipping-info-row-title'>Shipping</div>
        <div className='shipping-info-cell'>
          {"Arrives by Thu, Jan 21 "}
          <div className='shipping-pickup-modal'>
            <span>{"to "}</span>
            <button className='shipping-pickup-link'>10280</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
