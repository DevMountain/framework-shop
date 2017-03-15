import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";

import FeaturedProduct from "./FeaturedProduct";

test( "FeaturedProduct sets image src based on props.logo", () => {
	const featuredProduct = shallow(
		<FeaturedProduct
			addToCart={ () => null }
			description={ "foobarbaz" }
			logo={ "test" }
			name={ "Foo" }
			onSale={ false }
			price={ 2.99 }
		/>
	);

	expect( featuredProduct.find( ".featured-product__logo" ).props().src ).toBe( "test" );
} );

test( "Featured product renders a Link to the details page", () => {
	const featuredProduct = shallow(
		<FeaturedProduct
			addToCart={ () => null }
			description={ "foobarbaz" }
			logo={ "test" }
			name={ "Foo" }
			onSale={ false }
			price={ 2.99 }
		/>
	);

	const link = featuredProduct.find( "Link" );
	expect( link.length ).toBe( 1 );
	expect( link.props().to ).toBe( "/details/Foo" );
} );

test( "FeaturedProduct displays the product name", () => {
	const featuredProduct = shallow(
		<FeaturedProduct
			addToCart={ () => null }
			description={ "foobarbaz" }
			logo={ "test" }
			name={ "Foo" }
			onSale={ false }
			price={ 2.99 }
		/>
	);

	expect( featuredProduct.find( ".featured-product__name" ).text() ).toBe( "Foo" );
} );

test( "FeaturedProduct displays the product description", () => {
	const featuredProduct = shallow(
		<FeaturedProduct
			addToCart={ () => null }
			description={ "foobarbaz" }
			logo={ "test" }
			name={ "Foo" }
			onSale={ false }
			price={ 2.99 }
		/>
	);

	expect( featuredProduct.find( ".featured-product__description" ).text() ).toBe( "foobarbaz" );
} );

test( "FeaturedProduct displays an sale indicator based on props.onSale", () => {
	const featuredProduct = shallow(
		<FeaturedProduct
			addToCart={ () => null }
			description={ "foobarbaz" }
			logo={ "test" }
			name={ "Foo" }
			onSale={ false }
			price={ 2.99 }
		/>
	);

	expect( featuredProduct.find( ".featured-product__price-reduced" ).length ).toBe( 0 );

	featuredProduct.setProps( { onSale: true } );

	expect( featuredProduct.find( ".featured-product__price-reduced" ).length ).toBe( 1 );
} );

test( "FeaturedProduct calls props.addToCart on button click", () => {
	const addToCartSpy = sinon.spy();
	const featuredProduct = shallow(
		<FeaturedProduct
			addToCart={ addToCartSpy }
			description={ "foobarbaz" }
			logo={ "test" }
			name={ "Foo" }
			onSale={ false }
			price={ 2.99 }
		/>
	);

	featuredProduct
		.find( ".featured-product__buy" )
		.simulate( "click" );

	sinon.assert.calledOnce( addToCartSpy );
} );

test( "FeaturedProduct displays props.price", () => {
	const featuredProduct = shallow(
		<FeaturedProduct
			addToCart={ () => null }
			description={ "foobarbaz" }
			logo={ "test" }
			name={ "Foo" }
			onSale={ false }
			price={ 2.99 }
		/>
	);

	expect( featuredProduct.find( ".featured-product__buy" ).text() ).toBe( "$2.99" );
} );
