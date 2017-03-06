import React from "react";

import "./App.css";

import Nav from "./Nav/Nav";

export function App( { children } ) {
	return (
		<div className="app">
			<Nav />
			{ children }
		</div>
	);
}

export default App;
