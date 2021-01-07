import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

const Product = (props) => {
  const [sizeId, setSizeId] = useState("");
  const [size, setSize] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const prodId = props.match.params.id;
  const fetchProd = props.fetchProduct;
  const fetchSizes = props.fetchSizes;

  useEffect(() => {
    const getProd = () => fetchSizes(prodId);
    const getSizes = () => fetchProd(prodId);

    getProd();
    getSizes();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    size !== "" && props.userId
      ? submitRequest(e)
      : setErrorMessage("Please select a size.");
  };

  const submitRequest = (e) => {
    if (e.target.value === "addToCart") {
      console.log(e.target.value);
      // props.addToCart(
      //   props.product._id,
      //   sizeId,
      //   size
      // );
    }

    if (e.target.value === "favorite" && size) {
      // props.addToFavorites(props.product._id, sizeId);
      console.log(e.target.value);
    }
  };

  const verifyUser = (e) => {
    return props.userId !== null
      ? handleClick(e)
      : setErrorMessage("Sign up to place orders.");
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
    if (props.product !== null) {
      const images1 = [...props.product.images.model1];

      if (!!props.product.images.model2) {
        const images2 = [...props.product.images.model2];
      }

      return (
        <div className='product-show'>
          <div className='span-3-of-5'>
            {images1.map((img, idx) => {
              return (
                <div key={idx}>
                  <img key={img} src={img} alt={props.product.name} />
                </div>
              );
            })}
          </div>

          <div className='span-2-of-5 product-header'>
            <p className='product-brand-show-title'>
              {props.product.brandName}
            </p>
            <p className='product-show-subtitle'>{props.product.name}</p>
            <p className='product-show-subtitle'>${props.product.price}</p>
            <hr id='product-show-hr' />
            <div className='product-menu'>
              <div className='product-show-select'>
                <p>Select Size</p>
                <a className='size-chart' href={"www.google.com"}>
                  Size Chart
                </a>
              </div>
              <div>
                {props.sizes.map(({ size, _id }, index) => {
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
                  {props.product.description}
                </div>
              </div>

              <div className='fit-details-container'>
                <p>Fit Details</p>
                <hr id='product-show-hr' />
                <ul className='fit-details'>
                  {props.product.productDetails.map((detail, index) => {
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
  };
};

export default connect(mapStateToProps, actions)(Product);
