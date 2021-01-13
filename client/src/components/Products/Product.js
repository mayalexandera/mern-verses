import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

const Product = ({
  fetchSizes,
  fetchProduct,
  addToFavorites,
  addCartItem,
  userId,
  product,
  sizes,
  favorites,
  match: {
    params: { id },
  },
}) => {

  const [sizeId, setSizeId] = useState("");
  const [size, setSize] = useState();
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
    if (e.target.value === "addToCart" && sizeId) {
      addCartItem(sizeId, prodId, 1, product.name, product.price);
    }

    if (e.target.value === "favorite" && sizeId) {
      let existingFavorite = favorites.filter(
        (fave) => fave.product.toString() === prodId.toString()
      );

      existingFavorite[0] ? setErrorMessage("This item is already in your favorites")
      : addToFavorites(sizeId, prodId);
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

  const renderProduct = () => {
    if (product !== null) {
      const images = [...product.images.model1];

      return (
        <div className='product-show'>

          <div className='span-3-of-5'>
            {images.map((img, idx) => {
              return (
                <div key={idx}>
                  <img key={img} src={img} alt={product.name} />
                </div>
              );
            })}
          </div>

          <div className='span-2-of-5 product-header'>
            <p className='product-brand-show-title'>{product.brandName}</p>
            <p className='product-show-subtitle'>{product.name}</p>
            <p className='product-show-subtitle'>${product.price}</p>
            <hr id='product-show-hr' />
            <div className='product-menu'>
              <div className='product-show-select'>
                <p>Select Size</p>
                <a className='size-chart' href={"www.google.com"}>
                  Size Chart
                </a>
              </div>
              <div>
                {sizes.map(({ size, _id }, index) => {
                  return (
                    <button
                    key={index}
                    onClick={(e) => handleSizeClick(e)}
                    className='product-show-subtitle'
                    id={button(size)}
                    value={_id}
                    name={size}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
                <button onClick={() => setTimeout(() => {setErrorMessage(null)}, 1000)}className='error-message'>{errorMessage}</button>

              <ul className='product-actions'>
                <button
                  onClick={(e) => handleClick(e)}
                  value='addToCart'
                  id='add-to-cart-button'
                >
                  Add to Cart
                </button>
                <button
                  onClick={(e) => handleClick(e)}
                  value='favorite'
                  id='add-to-favorites-button'
                >
                  Add To Favorites
                </button>
              </ul>

              <div className='product-show-description-container'>
                <p>Description</p>
                <hr id='product-show-hr' />
                <div className='product-show-description'>
                  {product.description}
                </div>
              </div>

              <div className='fit-details-container'>
                <p>Fit Details</p>
                <hr id='product-show-hr' />
                <ul className='fit-details'>
                  {product.productDetails.map((detail, index) => {
                    return <li key={index}>{detail}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div>loading </div>;
  };
  
  return <div className='product-container'>{renderProduct()}</div>;
};

const mapStateToProps = ({ products: { product }, sizes, auth: { favorites, googleId } }) => {
  return { product, sizes, favorites, userId: googleId };
};

export default connect(mapStateToProps, actions)(Product);
