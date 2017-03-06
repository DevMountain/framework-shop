import React from "react";
import { shallow } from "enzyme";

import CartItem from "./CartItem";

test( "CartItem sets the img src to props.logo", () => {
	const cartItem = shallow(
		<CartItem
			logo="logo"
			name="Foo"
			price={ 2.99 }
		/>
	);

	expect( cartItem.find( ".cart-item__logo").props().src ).toBe( "logo" );
} );

test( "CartItem displays the product name", () => {
	const cartItem = shallow(
		<CartItem
			logo="logo"
			name="Foo"
			price={ 2.99 }
		/>
	);

	expect( cartItem.find( ".cart-item__name" ).text() ).toBe( "Foo" );
} );

test( "CartItem displays the product price", () => {
	const cartItem = shallow(
		<CartItem
			logo="logo"
			name="Foo"
			price={ 2.99 }
		/>
	);

	expect( cartItem.find( ".cart-item__price" ).text() ).toBe( "$2.99" );
} );
