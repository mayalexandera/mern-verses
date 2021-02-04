import React, { Fragment } from "react";
import { connect } from "react-redux";
import FavoriteCard from "./FavoriteCard";
import Dashboard from '../Dashboard/Dashboard'
import "./Favorites.css";
import * as actions from "../../store/actions";

const Favorites = ({ favoriteList }) => {
  const renderFavorites = () => {
    return favoriteList && favoriteList.items.length > 0 ? (
      favoriteList.items.map((fave) => {
        return <FavoriteCard key={fave._id} product={fave} />;
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
        <Dashboard title='Favorites'/>
        <div className='favorites-section'>
          <div className='favorite-content'>{renderFavorites()}</div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ favoriteList }) => {
  return { favoriteList };
};

export default connect(mapStateToProps, actions)(Favorites);
