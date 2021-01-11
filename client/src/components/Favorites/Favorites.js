import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

const Favorites = (props) => {

  useEffect(() => {
    props.fetchFavorites()
  }, [props.fetchFavorites])
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
    favorites: state.favorites
  }
}

export default connect(mapStateToProps, actions)(Favorites);
