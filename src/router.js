import React from "react";
import { Route } from "react-router-dom";

import Cart from "./components/Cart/Cart";
import Details from "./components/Details/Details";
import Landing from "./components/Landing/Landing";
import Shop from "./components/Shop/Shop";

export default (
	<div>
		<Route
			component={ Landing }
			path="/"
		/>
		<Route
			component={ Shop }
			path="/shop"
		/>
		<Route
			component={ Details }
			path="/details/:name"
		/>
		<Route
			component={ Cart }
			path="/cart"
		/>
	</div>
);
