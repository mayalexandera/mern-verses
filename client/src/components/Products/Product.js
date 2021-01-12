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
  cart,
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
    fetchSizes(prodId);
    fetchProduct(prodId);
  }, [fetchSizes, fetchProduct, prodId]);

  const handleClick = (e) => {
    e.preventDefault();
    size !== "" && userId
      ? submitRequest(e)
      : setErrorMessage("Please select a size.");
  };

  const submitRequest = (e) => {
    if (e.target.value === "addToCart" && sizeId) {
      addCartItem(sizeId, prodId, 1, product.name, product.price)
      // console.log(!!cart.filter(item => item.size.toString() === sizeId.toString()).length)
    }

    if (e.target.value === "favorite" && sizeId) {
      let users = favorites.filter(fave => 
        fave.product.toString() === prodId.toString()
      )
      if(users[0] !== undefined) {
        return setErrorMessage("Item is already in your favorites")
      } else if (users[0] === undefined ) {
        addToFavorites(sizeId, prodId)
      }
    }
  }
  


  const verifyUser = (e) => {
    return userId !== null
      ? handleClick(e)
      : setErrorMessage("Sign up to place orders.");
  };

  const handleSizeClick = (e) => {
    e.preventDefault();
    console.log("sizeId", e.target.value)
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
      const images1 = [...product.images.model1];

      if (!!product.images.model2) {
        const images2 = [...product.images.model2];
      }

      return (
        <div className='product-show'>
          <div className='span-3-of-5'>
            {images1.map((img, idx) => {
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
                <div style={{color: 'red'}}>{errorMessage}</div>
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

const mapStateToProps = (state) => {
  return {
    product: state.products.product,
    sizes: state.sizes,
    userId: state.auth.googleId,
    cart: state.auth.cart,
    favorites: state.auth.favorites,
  };
};

export default connect(mapStateToProps, actions)(Product);
