import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./Landing.css";

import { addToCart } from "../../ducks/product";

import FeaturedProduct from './FeaturedProduct/FeaturedProduct';

export function Landing( { addToCart, featuredProducts } ) {
  return (
    <main className="landing">
      <h1>Featured Products</h1>
      <div className="landing__products-wrapper">

      </div>

      <Link className="landing__full-shop-link" to="/shop">
        <h1 className="landing__full-shop-link">Take me to the full shop!</h1>
      </Link>
    </main>
  );
}

function mapStateToProps( { products } ) {
  return { featuredProducts: products.filter( product => product.featured || product.onSale ) };
}

export default connect( mapStateToProps, { addToCart } )( Landing );
