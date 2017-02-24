import React, { Component } from "react";

import "./App.css";

import Nav from "./Nav/Nav";

class App extends Component {
	render() {
		return (
			<div className="app">
				<Nav />
				{ this.props.children }
			</div>
		);
	}
}

export default App;
