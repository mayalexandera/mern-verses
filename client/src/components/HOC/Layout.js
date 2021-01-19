import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import Aux from './Aux'

class Layout extends Component {
  componentDidMount() {
    // if (this.props.isLoggedIn) {
      this.props.fetchUser()
      this.props.fetchFavorites()
      this.props.fetchCart()
    // }
  }

  render() {
    console.log(this.props, "Layout")
    return (
      <Aux>
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    isLoggedIn: !!state.auth,
    favoriteList: state.favoriteList,
    cart: state.cart
  };
};

export default connect(mapStateToProps, actions)(Layout);
