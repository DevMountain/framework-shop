import React, { PropTypes } from "react";
import { Link } from "react-router-dom";

import "./FeaturedProduct.css";

export default function FeaturedProduct( { addToCart, description, logo, name, onSale, price } ) {
  return (
    <div className="featured-product">
      <div className="featured-product__logo-name-wrapper">
        <img
          alt={ `${ name } logo` }
          className="featured-product__logo"
          src={ logo }
        />
        <Link to={ `/details/${ name }` }>
          <h3 className="featured-product__name">{ name }</h3>
        </Link>
      </div>
      <p className="featured-product__description">{ description }</p>
      <div className="featured-product__buy-wrapper">
        {
          onSale
          ?
            <p className="featured-product__price-reduced">Price Reduced!</p>
          :
            null
        }
        <button
          className="featured-product__buy"
          onClick={ addToCart }
        >
          ${ price }
        </button>
      </div>
    </div>
  );
}

FeaturedProduct.propTypes = {
  addToCart: PropTypes.func.isRequired
  , description: PropTypes.string.isRequired
  , logo: PropTypes.string.isRequired
  , name: PropTypes.string.isRequired
  , onSale: PropTypes.bool
  , price: PropTypes.number.isRequired
};

FeaturedProduct.defaultProps = { onSale: false };