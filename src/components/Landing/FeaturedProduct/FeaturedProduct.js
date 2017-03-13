import React, { PropTypes } from "react";

import "./FeaturedProduct.css";

export default function FeaturedProduct( { addToCart, description, logo, name, onSale, price } ) {
	return (
		<div className="featured-product">
			<div className="featured-product__logo-name-wrapper">
				<img
					alt={ `${ name } logo` }
					className="featured-product__logo"
					src={ "" /* product logo */ }
				/>
				<h3 className="featured-product__name">{ /* product name */ }</h3>
			</div>
			<p className="featured-product__description">{ /* product description */ }</p>
			<div className="featured-product__buy-wrapper">
				<p className="featured-product__price-reduced">Price Reduced!</p>
				<button
					className="featured-product__buy"
					onClick={ addToCart }
				>
					${ /* product price */ }
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
