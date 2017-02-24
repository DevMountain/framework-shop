import React from "react";
import { browserHistory, IndexRoute, Router, Route } from "react-router";

import App from "./components/App";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details/Details";
import Landing from "./components/Landing/Landing";
import Shop from "./components/Shop/Shop";

export default (
	<Router history={ browserHistory }>
		<Route
			component={ App }
			path="/"
		>
			<IndexRoute component={ Landing } />
			<Route
				component={ Shop }
				path="shop"
			/>
			<Route
				component={ Details }
				path="details/:name"
			/>
			<Route
				component={ Cart }
				path="cart"
			/>
		</Route>
	</Router>
);
