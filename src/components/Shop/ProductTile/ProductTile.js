import React, { PropTypes } from "react";
import { Link } from "react-router";

import "./ProductTile.css";

export default function ProductTile( { addToCart, logo, name, price } ) {
	return (
		<div className="product-tile">
			<section className="product-tile__info">
				<h3>{ /* Display the product name */ }</h3>
				<button
					className="product-tile__buy"
					onClick={ addToCart }
				>
					${ /* Display the product price */ }
				</button>
			</section>
			<section className="product-tile__logo-wrapper">
				<img
					className="product-tile__logo"
					alt={ `${ name } logo` }
					src={ /* Attach the product logo */ }
				/>
			</section>
		</div>
	);
}

ProductTile.propTypes = {
	  addToCart: PropTypes.func.isRequired
	, logo: PropTypes.string.isRequired
	, name: PropTypes.string.isRequired
	, price: PropTypes.number.isRequired
};
