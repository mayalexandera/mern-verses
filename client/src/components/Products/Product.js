import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import "./ProductShow.css";

const Product = ({
  fetchProduct,
  fetchFavorites,
  addFavorite,
  addCartItem,
  cartErrorMessage,
  favoriteList,
  product,
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
    fetchFavorites();
  }, [fetchProduct, fetchFavorites, prodId]);

  const handleAddToBag = (e) => {
    e.preventDefault();
    const productSize = product.productSizes.filter(
      (size) => size._id === sizeId
    );
    size !== "" && sizeId
      ? addCartItem(product, productSize[0])
      : setErrorMessage("Please select a size.");
  };

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    addFavorite(product);
  };

  const sizeHandler = (select) => {
    if (size !== select.size) {
      setSize(select.size);
      setSizeId(select._id);
    }
    if (size === select.size) {
      setSize("");
      setSizeId("");
    }
  };

  const button = (size_id) => {
    return size_id === sizeId ? "size-button-clicked" : "size-button";
  };

  const renderSizeGrid = () => {
    return product.productSizes.map((size) => {
      return (
        <div key={size._id}>
          <input
            className='visually-hidden'
            name={size.size}
            type='radio'
            value={size._id}
          />
          <label
            id={button(size._id)}
            htmlFor={size._id}
            className='select-size-label'
            onClick={() => sizeHandler(size)}
          >
            {size.size}
          </label>
        </div>
      );
    });
  };

  const renderProduct = () => {
    return ( product &&
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
        <div className='full-width-spacer' />
        <div className='product-gallery-wrapper'>
          <div className='product-gallery-container'>
            <div>
              <div>
                <div className='product-gallery-list'>
                  {product.images.model1.map((image, index) => {
                    return (
                      <div
                        key={index}
                        className='product-gallery-image-wrapper'
                      >
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
                            <p className='size-chart-link'>Size Guide</p>
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
                            className='vcss-btn-primary-dark btn-lg add-to-cart-button'
                            label='Add to Bag'
                            onClick={(e) => handleAddToBag(e)}
                          >
                            Add to Bag
                          </button>
                          <button
                            label='add-to-wishlist'
                            className='vcss-btn-secondary-dark btn-lg add-to-wishlist-button'
                            onClick={handleAddToFavorites}
                          >
                            <span className='wishlist-btn-tooltip'>
                              Favorite
                            </span>
                            <span className='material-icons-outlined'>
                              favorite_border
                            </span>
                          </button>
                          <div id='error-message-container'>
                            <p>{cartErrorMessage}</p>
                            <p>{errorMessage}</p>
                            <p>{favoriteList.message}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className='product-description-container'>
                  <div className='product-description-body'>
                    <p>{product.description}</p>
                    <ul className='product-description-features'>
                      {product.productDetails.map((feature, index) => {
                        return <li key={index}>{feature}</li>;
                      })}
                    </ul>
                    <button className='product-detail-link-btn'>
                      <span> View Product Details</span>
                    </button>
                  </div>
                  <div className='accordion-panel-menu'>
                    <div className='accordion-panel-menu-item'>
                      <button className='accordion-panel-menu-item-btn'>
                        <div className='accordion-panel-menu-btn'>
                          <h3 className='accordion-panel-menu-btn-title'>
                            Free Shipping and Returns
                          </h3>
                        </div>
                      </button>
                    </div>

                    <div className='accordion-menu-item'>
                      <button className='accordion-panel-menu-item-btn'>
                        <div className='accordion-panel-menu-btn'>
                          <h3 className=' accordion-panel-menu-btn-title'>
                            {"Reviews (0)"}
                          </h3>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div className='product-show-container'>{renderProduct()}</div>;
};

const mapStateToProps = ({
  products: { product },
  cart: { errorMessage },
  favoriteList,
  sizes,
}) => {
  return { product, favoriteList, sizes, cartErrorMessage: errorMessage };
};

export default connect(mapStateToProps, actions)(Product);
