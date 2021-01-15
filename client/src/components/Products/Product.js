import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { reduxForm, Field } from "redux-form";

import "./ProductShow.css";

const Product = ({
  fetchSizes,
  fetchProduct,
  addFavorite,
  addCartItem,
  userId,
  product,
  sizes,
  favoriteList,
  match: {
    params: { id },
  },
}) => {
  const [sizeId, setSizeId] = useState("");
  const [size, setSize] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const prodId = id;

  useEffect(() => {
    fetchProduct(prodId);
    fetchSizes(prodId);
  }, [fetchSizes, fetchProduct, prodId]);

  const handleClick = (e) => {
    e.preventDefault();
    size !== "" && userId
      ? submitRequest(e)
      : setErrorMessage("Please select a size.");
  };

  const submitRequest = (e) => {
    if (e.target.value === "addToCart") {
      addCartItem(
        prodId,
        sizeId,
        product.name,
        product.brandName,
        product.price,
        1,
        size,
        product.images.model1[0]
      );
    }

    if (e.target.value === "favorite") {
      let existingFavorite = null;
      if (!!favoriteList) {
        existingFavorite = favoriteList.items
          .filter((fave) => fave.productId === prodId)
          .map((item) => item._id);
      }
      !!existingFavorite[0]
        ? setErrorMessage("This item is already in your favorites")
        : addFavorite(
            prodId,
            sizeId,
            product.name,
            product.brandName,
            product.price,
            size,
            product.images.model1[0]
          );
    }
  };

  const handleSizeClick = (e) => {
    e.preventDefault();
    if (e.target.name === size) {
      setSizeId("");
      setSize("");
    } else if (e.target.name !== size) {
      setSizeId(e.target.value);
      setSize(e.target.name);
    }
  };

  const button = (alphaSize) => {
    return alphaSize === size ? "size-button-clicked" : "size-button";
  };

  const renderSizeGrid = () => {
    return product.productSizes.map((size) => {
      return (
        <div>
          <input
            className='visually-hidden'
            name={size.size}
            type='radio'
            value={size._id}
          />
          <label for={size._id} className='select-size-label'>
            {size.size}
          </label>
        </div>
      );
    });
  };

  const renderProduct = () => {
    if (product !== null) {
      return (
        <div>
          <div className='product-details-banner-wrapper'>
            <div>
              <div className='product-details-banner'>
                <div className='product-details-banner-body'>
                  <h2 className='headline-small product-details-banner-subtitle'>
                    {product.brandName}
                  </h2>
                  <h1 className='headline-2 product-details-banner-title'>
                    {product.name}
                  </h1>
                </div>
                <div className='headline-small product-details-banner-left-row'>
                  ${product.price}
                </div>
              </div>
            </div>
          </div>
          <div className='product-gallery-wrapper'>
            <div className='product-gallery-container'>
              <div>
                <div>
                  <div className='product-gallery-list'>
                    {product.images.model1.map((image) => {
                      return (
                        <div className='product-gallery-image-wrapper'>
                          <div className='product-gallery-image-spacer'>
                            <div>
                              <img
                                src={image}
                                alt={product.name}
                                className='product-gallery-image'
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className='product-summary-container'>
              <div className='product-summary-wrapper'>
                <div className='product-summary-body'>
                  <div className='product-summary-details-wrapper'>
                    <div>
                      <div className='product-summary-details-body'>
                        <div className='product-summary-details-left-row'>
                          <h2 className='headline-small product-summary-detail-subtitle'>
                            {product.brandName}
                          </h2>
                          <h1 className='headline-2 product-summary-detail-title'>
                            {product.name}
                          </h1>
                        </div>
                        <div className='headline-small product-summary-details-right-row'>
                          <div className='product-summary-details-price-wrapper'>
                            <div className='product-current-price'>
                              ${product.price}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='product-select-container'>
                    <form className='product-select-size-form'>
                      <div className='product-select-size-fieldset-wrapper'>
                        <fieldset className='product-select-size-fieldset'>
                          <legend className='headline-small select-size-form-header'>
                            <div className='headline-small size-header-row'>
                              <span className='size-header'>Select Size</span>
                              <a className='size-chart-link'>Size Guide</a>
                            </div>
                          </legend>
                          <div className='select-size-grid'>
                            {renderSizeGrid()}
                          </div>
                        </fieldset>
                      </div>
                      <div>
                        <div id='floating-atc-wrapper'>
                          <div className='atc-btn-container'>
                            <button
                              className='btn-primary-dark btn-lg add-to-cart-button'
                              label='Add to Bag'
                            >
                              Add to Bag
                            </button>
                            <button
                              label='add-to-wishlist'
                              className='btn-secondary-dark btn-lg add-to-wishlist-button'
                            >
                              <span className='wishlist-btn-tooltip'>Favorite</span>
                              <span className='material-icons-outlined'>
                                favorite_border
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className='product-description-container'>
                    {product.description}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div className='product-show-container'>{renderProduct()}</div>;
};

const mapStateToProps = ({
  products: { product },
  favoriteList,
  sizes,
  auth: { googleId },
}) => {
  return { product, favoriteList, sizes, userId: googleId };
};

export default connect(mapStateToProps, actions)(Product);
