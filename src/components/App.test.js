import React from "react";
import { shallow } from "enzyme";

import App from "./App";

test( "App renders props.children", () => {
	const app = shallow( <App><div className="test-div" /></App> );

	expect( app.find( ".test-div" ).length ).toBe( 1 );
} );
