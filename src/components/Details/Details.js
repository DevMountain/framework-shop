import React from "react";
import { connect } from "react-redux";

import "./Details.css"

import { addToCart } from "../../ducks/product";

export function Details( { addToCart, history, product } ) {
  const {
      description
    , id
    , logo
    , name
    , price
  } = product;

  return (
    <div className="details">
      <h3 className="details__back-to-shop">Back to shop</h3>
      <img
        alt={ name }
        className="details__logo"
        src={ logo }
      />
    <h1 className="details__name">{ name }</h1>
      <p className="details__description">{ description }</p>
      <button
        className="details__buy"
        onClick={ addToCart( id ) }
      >
        Buy now for ${ price }!
      </button>
    </div>
  );
}

function mapStateToProps( state, ownProps ) {
  return { product: state.products.find( product => product.name === ownProps.match.params.name ) };
}

export default connect( mapStateToProps, { addToCart } )( Details );
