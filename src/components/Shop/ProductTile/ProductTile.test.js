import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";

import ProductTile from "./ProductTile";

test( "ProductTile renders a Link element", () => {
	const productTile = shallow(
		<ProductTile
			addToCart={ () => null }
			logo={ "" }
			name="Foo"
			price={ 1 }
		/>
	);

	expect( productTile.find( "Link" ).length ).toBe( 1 );
} );

test( "ProductTile passes the appropriate 'to' prop to the Link", () => {
	const productTile = shallow(
		<ProductTile
			addToCart={ () => null }
			logo={ "" }
			name="Foo"
			price={ 1 }
		/>
	);

	expect( productTile.find( "Link" ).props().to ).toBe( "/details/Foo" );
} );

test( "ProductTile displays the product name", () => {
	const productTile = shallow(
		<ProductTile
			addToCart={ () => null }
			logo={ "" }
			name="Foo"
			price={ 1 }
		/>
	);

	expect( productTile.find( "Link h3" ).text() ).toBe( "Foo" );
} );

test( "ProductTile calls props.addToCart on button click", () => {
	const addToCartSpy = sinon.spy();
	const productTile = shallow(
		<ProductTile
			addToCart={ addToCartSpy }
			logo={ "" }
			name="Foo"
			price={ 1 }
		/>
	);

	productTile
		.find( ".product-tile__buy" )
		.simulate( "click" );

	sinon.assert.calledOnce( addToCartSpy );
} );

test( "ProductTile displays props.price", () => {
	const productTile = shallow(
		<ProductTile
			addToCart={ () => null }
			logo={ "" }
			name="Foo"
			price={ 1 }
		/>
	);

	expect( productTile.find( ".product-tile__buy" ).text() ).toBe( "$1" );
} );

test( "ProductTile displays sets the img src to props.logo", () => {
	const productTile = shallow(
		<ProductTile
			addToCart={ () => null }
			logo={ "foobar" }
			name="Foo"
			price={ 1 }
		/>
	);

	expect( productTile.find( ".product-tile__logo" ).props().src ).toBe( "foobar" );
} );
