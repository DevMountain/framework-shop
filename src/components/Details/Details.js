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
				src={ logo }
			/>
			<h1 className="details__name">{ name }</h1>
			<p className="details__description">{ description }</p>
			<button
				className="details__buy"
				onClick={ () => addToCart( product.id ) }
			>
				Buy now for ${ price }!
			</button>
		</div>
	);
}

function mapStateToProps( { products }, ownProps ) {
	return { product: products.filter( product => product.name === ownProps.params.name )[ 0 ] };
}

export default connect( mapStateToProps, { addToCart } )( Details );
