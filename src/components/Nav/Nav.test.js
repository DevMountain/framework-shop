import React from "react";
import { shallow } from "enzyme";

import { Nav } from "./Nav";

test( "Nav renders an IndexLink component", () => {
	const nav = shallow( <Nav cartTotal={ 0 } /> );

	expect( nav.find( "IndexLink" ).length ).toBe( 1 );
} );

test( "Nav renders a Link component", () => {
	const nav = shallow( <Nav cartTotal={ 0 } /> );

	expect( nav.find( "Link" ).length ).toBe( 1 );
} );

test( "Nav displays the current cart total", () => {
	const nav = shallow( <Nav cartTotal={ 10.99 } /> );

	expect( nav.find( ".nav__cart" ).text() ).toBe( "Cart ( $10.99 )" );

	nav.setProps( { cartTotal: 0 } );

	expect( nav.find( ".nav__cart" ).text() ).toBe( "Cart ( $0 )" );
} );
