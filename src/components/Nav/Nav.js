import React from "react";
import { IndexLink, Link } from "react-router";
import { connect } from "react-redux";

import "./Nav.css";
import javascriptLogo from "../../assets/javascript.svg";

export function Nav( { cartTotal } ) {
	return (
		<nav className="nav">
			<IndexLink to="/">
				<div className="nav__header-wrapper">
					<img
						alt="javascript logo"
						className="nav__javascript-logo"
						src={ javascriptLogo }
					/>
					<h3 className="nav__header">
						The JavaScript Framework Shop
					</h3>
				</div>
			</IndexLink>
			<Link to="cart"><p className="nav__cart">Cart ( ${ cartTotal } )</p></Link>
		</nav>
	);
}

function mapStateToProps( { products, productsInCart } ) {
	return {
		cartTotal: products
			.filter( product => productsInCart.includes( product.id ) )
			.map( ( { price } ) => price )
			.reduce( ( total, currentPrice ) => total + currentPrice, 0 )
			.toFixed( 2 )
	};
}

export default connect( mapStateToProps )( Nav );
