import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

const Favorites = ({ favorites, fetchFavoriteProducts }) => {

  useEffect(() => {
    fetchFavoriteProducts()
  }, [fetchFavoriteProducts])
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>
        Favorites
      </h2>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.favorites.products
  }
}

export default connect(mapStateToProps, actions)(Favorites);
