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
				alt={ "" /* products name */ }
				className="details__logo"
				src={ "" /* products logo */ }
			/>
		<h1 className="details__name">{ /* products name*/ }</h1>
			<p className="details__description">{ /* products description*/ }</p>
			<button
				className="details__buy"
				onClick={ addToCart( id ) }
			>
				Buy now for ${ /* products price */ }!
			</button>
		</div>
	);
}

function mapStateToProps( state, ownProps ) {
	return state
}

export default connect( mapStateToProps, { addToCart } )( Details );
