import React from "react";

import "./App.css";

import router from "../router";

import Nav from "./Nav/Nav";

export function App( { children } ) {
	return (
		<div className="app">
			<Nav />
			{ router }
		</div>
	);
}

export default App;
