import React from "react";
import { shallow } from "enzyme";

import { Shop } from "./Shop";

test( "Shop displays a list of Product Tiles", () => {
	const products = [
		{
			  id: 1
			, logo: "foo"
			, name: "bar"
			, price: 2.99
		}
		, {
			  id: 2
			, logo: "baz"
			, name: "qux"
			, price: 99.99
		}
	];
	const shop = shallow(
		<Shop
			addToCart={ () => null }
			products={ products }
		/>
	);

	expect( shop.find( "ProductTile" ).length ).toBe( 2 );

	shop.setProps( { products: products.slice( 0, 1 ) } );

	expect( shop.find( "ProductTile" ).length ).toBe( 1 );
} );
