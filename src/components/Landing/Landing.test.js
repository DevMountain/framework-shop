import React from "react";
import { shallow } from "enzyme";

import { Landing } from "./Landing";

const products = [
	{
		  description: "Foobarbaz"
		, id: 1
		, logo: ""
		, name: "foo"
		, onSale: false
		, price: 2.99
	}
	, {
		  description: "Foobarbaz"
		, id: 2
		, logo: ""
		, name: "bar"
		, onSale: true
		, price: 3.99
	}
];

test( "Landing displays a list of FeaturedProducts", () => {
	const landing = shallow(
		<Landing
			addToCart={ () => null }
			featuredProducts={ products.slice() }
		/>
	);

	expect( landing.find( "FeaturedProduct" ).length ).toBe( 2 );

	landing.setProps( { featuredProducts: products.slice( 0, 1 ) } );

	expect( landing.find( "FeaturedProduct" ).length ).toBe( 1 );
} );

test( "Landing displays a link to the full shop", () => {
	const landing = shallow(
		<Landing
			addToCart={ () => null }
			featuredProducts={ products.slice() }
		/>
	);

	const link = landing.find( "Link" );

	expect( link.length ).toBe( 1 );
	expect( link.props().to ).toBe( "/shop" );
} );
