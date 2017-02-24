import React, { Component } from "react";
import { connect } from "react-redux";

import "./Shop.css";

import { addToCart } from "../../ducks/product";

import ProductTile from "./ProductTile/ProductTile";

export class Shop extends Component {
	render() {
		const products = this.props.products.map( product => (
			<ProductTile
				addToCart={ () => this.props.addToCart( product.id ) }
				key={ product.id }
				{ ...product }
			/>
		) );
		return (
			<div className="shop">
				<h1 className="shop__header">Shop</h1>
				<div className="shop__products-wrapper">
					{ products }
				</div>
			</div>
		);
	}
}

function mapStateToProps( { products } ) {
	return { products };
}
export default connect( mapStateToProps, { addToCart } )( Shop );
