import React from "react";
import { shallow } from "enzyme";

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
