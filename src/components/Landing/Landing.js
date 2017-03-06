import React from "react";
import { connect } from "react-redux";

import "./Landing.css";

import { addToCart } from "../../ducks/product";

export function Landing( { addToCart, featuredProducts } ) {
	return (
		<main className="landing">
			<h1>Featured Products</h1>
			<div className="landing__products-wrapper">

			</div>

			<h1 className="landing__full-shop-link">Take me to the full shop!</h1>
		</main>
	);
}

function mapStateToProps( { products } ) {
	return { featuredProducts: products.filter( product => product.featured || product.onSale ) };
}

export default connect( mapStateToProps, { addToCart } )( Landing );
