import React, { PropTypes } from "react";
import { Link } from "react-router-dom";

import "./ProductTile.css";

export default function ProductTile( { addToCart, logo, name, price } ) {
  return (
    <div className="product-tile">
      <section className="product-tile__info">
        <Link to={ `details/${ name }` }>
          <h3> { name } </h3>
        </Link>
        <button
          className="product-tile__buy"
          onClick={ addToCart }
        >
          ${ price }
        </button>
      </section>
      <section className="product-tile__logo-wrapper">
        <img
          className="product-tile__logo"
          alt={ `${ name } logo` }
          src={ logo }
        />
      </section>
    </div>
  );
}

ProductTile.propTypes = {
  addToCart: PropTypes.func.isRequired,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};
