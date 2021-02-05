import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import Aux from "./Aux";

class Layout extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
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
    favoriteList: state.favoriteList,
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(actions.fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
