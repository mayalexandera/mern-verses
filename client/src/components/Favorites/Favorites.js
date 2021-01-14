import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import FavoriteCard from "./FavoriteCard";
import "./Favorites.css";
import * as actions from "../../store/actions";

const Favorites = ({ favorites }) => {

  const renderFavorites = () => {
    return favorites ? (
      favorites.map((fave) => {
        return <FavoriteCard product={fave} />;
      })
    ) : (
      <div className='favorites-placeholder'>
        Items added to your favorites will be saved here.
      </div>
    );
  };
  return (
    <Fragment>
      <div className='favorites-container'>
        <div className='favorites-section'>{renderFavorites()}</div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ auth: { favorites } }) => {
  return { favorites };
};

export default connect(mapStateToProps, actions)(Favorites);
