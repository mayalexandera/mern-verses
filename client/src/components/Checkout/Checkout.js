import React from 'react'
import { connect } from "react-redux";


const Checkout = ({ cart, orders }) => {
  return (
    <div>Checkout</div>
  )
}

const mapStateToProps = ({ cart, orders }) => {
  return { cart, orders }
}

export default connect(mapStateToProps)(Checkout)