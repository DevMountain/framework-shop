import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";

import { Cart } from "./Cart";

const products = [
	{
		  id: 1
		, name: "Foo"
		, logo: "logo"
		, price: 2
	}
	, 	{
		  id: 2
		, name: "Bar"
		, logo: "logo"
		, price: 7
	}
];

test( "Cart displays a message if there are no products in cart", () => {
	const cart = shallow( <Cart productsInCart={ [] } /> );

	expect( cart.find( "h3" ).text() ).toBe( "Nothing in cart! Go buy something!" );
} );

test( "Cart displays a list of products in cart", () => {
	const cart = shallow( <Cart productsInCart={ products.slice() } /> );

	expect( cart.find( "CartItem" ).length ).toBe( 2 );

	cart.setProps( { productsInCart: products.slice( 0, 1 ) } );

	expect( cart.find( "CartItem" ).length ).toBe( 1 );
} );

test( "Cart displays a total price of products in cart", () => {
	const cart = shallow( <Cart productsInCart={ products.slice() } /> );

	expect( cart.find( ".cart__total" ).text() ).toBe( "$9" );

	cart.setProps( { productsInCart: products.slice( 0, 1 ) } );

	expect( cart.find( ".cart__total" ).text() ).toBe( "$2" );
} );

test( "Cart calls props.checkout on checkout button click", () => {
	const checkoutSpy = sinon.spy();

	const cart = shallow(
		<Cart
			checkout={ checkoutSpy }
			history={ { push() {} } }
			productsInCart={ products.slice() }
		/>
	);

	cart
		.find( ".cart__checkout" )
		.simulate( "click" );

	sinon.assert.calledOnce( checkoutSpy );
} );

test( "Cart calls props.history.push on checkout button click", () => {
	const push = sinon.spy();

	const cart = shallow(
		<Cart
			checkout={ () => null }
			history={ { push } }
			productsInCart={ products.slice() }
		/>
	);

	cart
		.find( ".cart__checkout" )
		.simulate( "click" );

	sinon.assert.calledOnce( push );
} );
