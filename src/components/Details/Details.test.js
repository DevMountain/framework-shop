import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";

import { Details } from "./Details";

test( "Details displays a Link to shop", () => {
	const details = shallow(
		<Details
			addToCart={ () => null }
			product={ {
				  description: "foobarbaz"
				, logo: "logo"
				, name: "Foo"
				, price: 2.99
			} }
		/>
	);

	const link = details.find( "Link" );
	expect( link.length ).toBe( 1 );
	expect( link.props().to ).toBe( "/shop" );
} );

test( "Details sets the img src to props.logo", () => {
	const details = shallow(
		<Details
			addToCart={ () => null }
			product={ {
				description: "foobarbaz"
				, logo: "logo"
				, name: "Foo"
				, price: 2.99
			} }
		/>
	);

	expect( details.find( ".details__logo" ).props().src ).toBe( "logo" );
} );

test( "Details displays the product name", () => {
	const details = shallow(
		<Details
			addToCart={ () => null }
			product={ {
				description: "foobarbaz"
				, logo: "logo"
				, name: "Foo"
				, price: 2.99
			} }
		/>
	);

	expect( details.find( ".details__name" ).text() ).toBe( "Foo" );
} );

test( "Details displays the product description", () => {
	const details = shallow(
		<Details
			addToCart={ () => null }
			product={ {
				description: "foobarbaz"
				, logo: "logo"
				, name: "Foo"
				, price: 2.99
			} }
		/>
	);

	expect( details.find( ".details__description" ).text() ).toBe( "foobarbaz" );
} );

test( "Details calls props.addToCart on button click", () => {
	const addToCartSpy = sinon.spy();

	const details = shallow(
		<Details
			addToCart={ addToCartSpy }
			history={ { goBack() {} } }
			product={ {
				  description: "foobarbaz"
				, logo: "logo"
				, name: "Foo"
				, price: 2.99
			} }
		/>
	);

	details
		.find( ".details__buy" )
		.simulate( "click" );

	sinon.assert.calledOnce( addToCartSpy );
} );

test( "Details calls history.goBack on buy", () => {
	const goBack = sinon.spy();
	const details = shallow(
		<Details
			addToCart={ () => null }
			history={ { goBack } }
			product={ {
				description: "foobarbaz"
				, logo: "logo"
				, name: "Foo"
				, price: 2.99
			} }
		/>
	);

	details
		.find( ".details__buy" )
		.simulate( "click" );

	sinon.assert.calledOnce( goBack );
} );

test( "Details displays the product price", () => {
	const details = shallow(
		<Details
			addToCart={ () => null }
			product={ {
				description: "foobarbaz"
				, logo: "logo"
				, name: "Foo"
				, price: 2.99
			} }
		/>
	);

	expect( details.find( ".details__buy" ).text() ).toBe( "Buy now for $2.99!" );
} );
