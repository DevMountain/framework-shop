import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import "./Details.css"

import { addToCart } from "../../ducks/product";

export function Details( { addToCart, product } ) {
	const {
		  description
		, logo
		, name
		, price
	} = product;

	return (
		<div className="details">
			<h3 className="details__back-to-shop"><Link to="/shop">Back to shop</Link></h3>
			<img
				alt={ `${ name } logo` }
				className="details__logo"
				src={ "" /* Attach the product logo */ }
			/>
			<h1 className="details__name">{ /* Display the product name */ }</h1>
			<p className="details__description">{ /* Display the product description */ }</p>
			<button
				className="details__buy"
				onClick={ () => addToCart( product.id ) }
			>
				Buy now for ${ /* Display the product price */ }!
			</button>
		</div>
	);
}

function mapStateToProps( state ) {
	return state;
}

export default connect( mapStateToProps, { addToCart } )( Details );
