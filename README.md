<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Framework Shop

### Project Summary

In this project we will be building an ecommerce shop for the sale of JavaScript libraries. Using React Router we'll set up and navigate between the various views required. Take some time to familiarize yourself with the provided components. 

* App will be the top level component for our application
* Nav is the top navigation bar
* Landing will be the home page displayed when the application first loads
* Shop will be the main shop page, displaying the items available
* Details will be the view in which a user views a single product's information
* Cart will be the user's cart

Several of these have child components, used to display products in different ways.

Redux has also been mostly wired up to the application. Take a quick look over the reducer to get an idea of how the application data looks.

### Setup

Get started with the usual steps: 

* Fork and clone this repository
* `cd` into the project directory
* `npm i` to download the included dependencies
* `npm test` to start the test suite
* `npm start` to spin up the development server

### Step 1

**Summary**

In step 1 we will be installing the required dependencies, configuring the router, and rendering our application through the router.

**Instructions**

* Install React Router
* Create a new file in `src/` named `router.js`
* Configure a router in the new file
* Wrap `Provider` in a `BrowserRouter` component in `src/index.js`
* Render the router in `src/components/App.js`

**Detailed Instructions**

Start out by running `npm i react-router-dom --save` to install and save React Router to the `package.json`.  Once that installs, create a new file in `src/` named `router.js`. This file will be where we create and configure our router.

In `src/router.js` we need to import the following

* `React` from React - Because we will be using JSX to declare our routes, React must be defined in the file.
* From `react-router-dom` we'll need
	* `Route` - The default component used for defining a new route
	* `Switch` - A component for determining which route to display
* Several of the provided project components will serve as an individual view/route. We'll need the following
	* `Cart` from `src/components/Cart/Cart.js`
	* `Details` from `src/components/Details/Details.js`
	* `Landing` from `src/components/Landing/Landing.js`
	* `Shop` from `src/components/Shop/Shop.js`

Underneath the imports, we're going to export default the JSX representing our router. You probably haven't seen this elsewhere, but you can export raw JSX just fine!

The top level element of the router will be the `Switch` component. We need to use a `Switch` to prevent multiple routes from displaying at the same time. `Route` component's will happily render all at the same time, as long as the current path appears to match their path.

Let's supply the `Switch` with some routes. Place four `Route` components inside of `Switch`. Each `Route` component requires two props:

* `path` - This is the path when the route will be active. For example this repo lives at `https://github.com/DevMountain/framework-shop`. The `path` for this URL would be `/DevMountain/framework-shop`
* `component` - The React component we wish to render when this route is active

Our four routes will be the following:
* A `Route` with `component` set equal to the `Landing` component, a `path` if `"/"`, and `exact` set to `true`. The `exact` prop prevents this route from overriding our others, because technically any of the routes match `"/"`. With `exact` this route won't match unless the path is _exactly_ `"/"`.
* A `Route` with a `path` of `"/shop"` and a `component` of `Shop`
* A `Route` with a path of `"/details/:name"` and a component of `Details`. Note that we are using a route parameter here! That means that inside of the handle component we can access the `name` parameter.
* A `Route` with a `path` of `"/cart"` and a component of `Cart`

Now that our routes our configured, we need to wrap our application in a `BrowserRouter` component. Open up `src/index.js` and import `BrowserRouter` from `react-router-dom`. Inside of `ReactDOM.render` wrap the `Provider` component in `BrowserRouter`.

Lastly, inside of `src/components/App.js` we need to import `router` from `src/router.js` and render it just beneath `<Nav />`. Because we are rendering the `router` inside of `App`, that means `App` will always be visible! This is useful, because we want to display the top navigation bar on every page, and now we only have to render it once.

You should now see the `Landing` component by default, and have the ability to navigate to different routes via the address bar.

<details>

<summary><b>Code Solution</b></summary>

<details>

<summary><code>src/router.js</code></summary>

```jsx
import React from "react";
import { Route, Switch } from "react-router-dom";

import Cart from "./components/Cart/Cart";
import Details from "./components/Details/Details";
import Landing from "./components/Landing/Landing";
import Shop from "./components/Shop/Shop";

export default (
	<Switch>
		<Route
			component={ Landing }
			exact
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
	</Switch>
);
```

</details>

<details>

<summary><code>src/index.js</code></summary>

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import store from "./store";

import App from "./components/App";

ReactDOM.render(
	<BrowserRouter>
		<Provider store={ store }>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById( "root" )
);

```

</details>

<details>

<summary><code>src/components/App.js</code></summary>

```jsx
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
```

</details>

</details>

### Step 2

**Summary**

In this step we will be setting up the `Landing` component to display data and link to other views.

**Instructions**

* Render featured products in `src/components/Landing/Landing.js`
* Update `src/components/Landing/FeaturedProduct/FeaturedProduct.js` to display data from props

**Detailed Instructions**

We need to update `src/components/Landing/Landing.js` so that it actually displays some data! Before we make any changes, take a look at the provided `mapStateToProps` and `connect`. This component will take a `products` prop that is an array of of products that are either featured or on sale. We are also passing the `addToCart` action creator to allow for dispatching a new product to cart.

First off, import `FeaturedProduct` from `src/components/Landing/FeaturedProduct/FeaturedProduct.js` and `Link` from `react-router-dom`. The `Link` component is React Router's replacement for an `<a>` tag, used to allow the library better control over routing. Near the bottom of render wrap the `h1` with the class `landing__full-shop-link` in a `Link`.  `Link` will take one prop - `to` set equal to the path we want it to navigate to `"/shop"`.

At the top of the `Landing` function create a new variable `products` set equal to the result of `map`ping over `featuredProducts` and returning the following JSX

```jsx
<FeaturedProduct
	addToCart={ () => addToCart( product.id ) }
	description={ product.description }
	key={ product.id }
	logo={ product.logo }
	name={ product.name }
	onSale={ product.onSale }
	price={ product.price }
/>
```

Render the `products` variable into the `div` with a class of `landing__products-wrapper`. We're now displaying a list of `FeaturedProduct` elements, but they aren't complete yet.

Open up `src/components/Landing/FeaturedProduct/FeaturedProduct.js` and import `Link` from React Router. Replace the commented sections with the appropriate props. Wrap the `h3` tag that holds the product name in a `Link` component with a `to` prop of ```/details/${ name }` ``. Lastly use a ternary operator to only display the "Price Reduced!" `p` tag only if the product is on sale.

<details>

<summary><b>Code Solution</b></summary>

<details>

<summary><code>src/components/Landing/Landing.js</code></summary>

```jsx
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./Landing.css";

import { addToCart } from "../../ducks/product";

import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";

export function Landing( { addToCart, featuredProducts } ) {
	const products = featuredProducts.map( product => (
		<FeaturedProduct
			addToCart={ () => addToCart( product.id ) }
			description={ product.description }
			key={ product.id }
			logo={ product.logo }
			name={ product.name }
			onSale={ product.onSale }
			price={ product.price }
		/>
	) );

	return (
		<main className="landing">
			<h1>Featured Products</h1>
			<div className="landing__products-wrapper">
				{ products }
			</div>

			<Link to="/shop"><h1 className="landing__full-shop-link">Take me to the full shop!</h1></Link>
		</main>
	);
}

function mapStateToProps( { products } ) {
	return { featuredProducts: products.filter( product => product.featured || product.onSale ) };
}

export default connect( mapStateToProps, { addToCart } )( Landing );
```

</details>

<details>

<summary><code>src/components/Landing/FeaturedProduct/FeaturedProduct.js</code></summary>

```jsx
import React, { PropTypes } from "react";
import { Link } from "react-router-dom";

import "./FeaturedProduct.css";

export default function FeaturedProduct( { addToCart, description, logo, name, onSale, price } ) {
	return (
		<div className="featured-product">
			<div className="featured-product__logo-name-wrapper">
				<img
					alt={ `${ name } logo` }
					className="featured-product__logo"
					src={ logo }
				/>
				<Link to={ `/details/${ name }` }><h3 className="featured-product__name">{ name }</h3></Link>
			</div>
			<p className="featured-product__description">{ description }</p>
			<div className="featured-product__buy-wrapper">
				{ onSale ? <p className="featured-product__price-reduced">Price Reduced!</p> : null }
				<button
					className="featured-product__buy"
					onClick={ addToCart }
				>
					${ price }
				</button>
			</div>
		</div>
	);
}

FeaturedProduct.propTypes = {
	  addToCart: PropTypes.func.isRequired
	, description: PropTypes.string.isRequired
	, logo: PropTypes.string.isRequired
	, name: PropTypes.string.isRequired
	, onSale: PropTypes.bool
	, price: PropTypes.number.isRequired
};

FeaturedProduct.defaultProps = { onSale: false };
```

</details>

</details>

### Step 3

**Summary**

In this step we will set up the `Details` component, making use of route parameters to display the correct product data.

**Instructions**

* Use route parameters to select the correct product in `mapStateToProps`
* Update the component JSX to display the product information
* Add a `Link` back to the shop
* If a user adds a product to cart, redirect them back to the page they were previously on

**Detailed Instructions**

This step will take place inside of `src/components/Details/Details.js`. Currently this view is broken, and will throw errors if we try to navigate to it. This is because our `mapStateToProps` function is returning all of our application state instead of the specific product we need.

To fix this we'll need to get access to our route parameters in `mapStateToProps`, luckily `connect` passes a second parameter, `ownProps`, for us that represents the rest of a connected component's `props`. Using this second parameter we can update the return value to something that looks like this:

```javascript
return { product: state.products.find( product => product.name === ownProps.match.params.name ) }
```

The [`match`](https://reacttraining.com/react-router/web/api/match) object is passed to our component via React Router and contains information about how the current route matched the URL, including params.

Now that the component has access to the proper product object go ahead and update the commented sections to display the appropriate data. Import `Link` from React Router and use it inside of the `h3` element to wrap the text in a `Link` component with a `to` prop of `"/shop"`.

Lastly we need to update what happens when the "Buy" button is clicked. Currently it just adds the item to cart in Redux, we want it to also send the user back to the page they were previously on. To do this we will need to use another prop from React Router - `history`. The `history` object represents the [`window.History`](https://developer.mozilla.org/en-US/docs/Web/API/History) api. Write a new function inside of `Details` named `addToCartAndRedirect`. This function will invoke `addToCart` passing `id` as a prop, then invoke `history.goBack` to send the user back to the previous page.

<details>

<summary><b>Code Solution</b></summary>

<details>

<summary><code>src/components/Details/Details.js</code></summary>

```jsx
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./Details.css"

import { addToCart } from "../../ducks/product";

export function Details( { addToCart, history, product } ) {
	const {
		  description
		, id
		, logo
		, name
		, price
	} = product;

	function addToCartAndRedirect() {
		addToCart( id );
		history.goBack();
	}

	return (
		<div className="details">
			<h3 className="details__back-to-shop"><Link to="/shop">Back to shop</Link></h3>
			<img
				alt={ `${ name } logo` }
				className="details__logo"
				src={ logo }
			/>
			<h1 className="details__name">{ name }</h1>
			<p className="details__description">{ description }</p>
			<button
				className="details__buy"
				onClick={ addToCartAndRedirect }
			>
				Buy now for ${ price }!
			</button>
		</div>
	);
}

function mapStateToProps( state, ownProps ) {
	return { product: state.products.find( product => product.name === ownProps.match.params.name ) };
}

export default connect( mapStateToProps, { addToCart } )( Details );
```

</details>

</details>

### Step 4

**Summary**

In this (short) step we will set up the top navigation bar to display cart information and provide some links.

**Instructions**

* Add a link to the `Landing` view
* Add a link to the `Cart` view
* Display the total cost of items in cart

**Detailed Instructions**

To get started, open up `src/components/Nav/Nav.js` and import `Link` from `react-router-dom`. Wrap the `div` with a class of `nav__header-wrapper` in a `Link` component with a `to` prop of `"/"`. Wrap the `p` with a class of `nav__cart` in a `Link` component with a `to` prop of `"/cart"`.

Lastly, you'll notice that the Redux selector is passing in a `cartTotal` prop, display that inside of the `p.nav__cart`.

That was quick and easy! Now you have the ability to navigate around the application better and should see the total update anytime you add a product to cart.

<details>

<summary><b>Code Solution</b></summary>

```jsx
// src/components/Nav/Nav.js

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./Nav.css";
import javascriptLogo from "../../assets/javascript.svg";

export function Nav( { cartTotal } ) {
	return (
		<nav className="nav">
			<Link to="/">
				<div className="nav__header-wrapper">
						<img
							alt="javascript logo"
							className="nav__javascript-logo"
							src={ javascriptLogo }
						/>
						<h3 className="nav__header">
							The JavaScript Framework Shop
						</h3>
				</div>
			</Link>
			<Link to="/cart"><p className="nav__cart">Cart ( ${ cartTotal } )</p></Link>
		</nav>
	);
}

function mapStateToProps( { products, productsInCart } ) {
	return {
		cartTotal: products
			.filter( product => productsInCart.includes( product.id ) )
			.reduce( ( total, { price } ) => total + price, 0 )
			.toFixed( 2 )
	};
}

export default connect( mapStateToProps )( Nav );
```

</details>

### Step 5

**Summary**

In this step we will set up the `Shop` view and its child components.

**Instructions**

* Render a list of `ProductTile` components in `src/components/Shop/Shop.js`
* Update the commented sections of `src/components/Shop/ProductTile/ProductTile.js` with the appropriate props
* Wrap the `h3` containing the product name in a `Link` component with a `to` prop of ```/details/${ name }` ``

No detailed instructions for this step! If you get stuck try these before reading the solution:

* This step is very similar to how we set up the `Landing` and `FeaturedProducts` components. Refer back to that!
* Check the bottom of the `ProductTile` file to see the `propTypes` the component is expecting.

<details>

<summary><b>Code Solution</b></summary>

<details>

<summary><code>src/components/Shop/Shop.js</code></summary>

```jsx
import React from "react";
import { connect } from "react-redux";

import "./Shop.css";

import { addToCart } from "../../ducks/product";

import ProductTile from "./ProductTile/ProductTile";

export function Shop( { addToCart, products } ) {
	const productTiles = products.map( product => (
		<ProductTile
			addToCart={ () => addToCart( product.id ) }
			key={ product.id }
			logo={ product.logo }
			name={ product.name }
			price={ product.price }
		/>
	) );

	return (
		<div className="shop">
			<h1 className="shop__header">Shop</h1>
			<div className="shop__products-wrapper">
				{ productTiles }
			</div>
		</div>
	);
}

function mapStateToProps( { products } ) {
	return { products };
}
export default connect( mapStateToProps, { addToCart } )( Shop );
```

</details>

<details>

<summary><code>src/components/Shop/FeaturedProduct/FeaturedProduct.js</code></summary>

```jsx
import React, { PropTypes } from "react";
import { Link } from "react-router-dom";

import "./ProductTile.css";

export default function ProductTile( { addToCart, logo, name, price } ) {
	return (
		<div className="product-tile">
			<section className="product-tile__info">
				<Link to={ `/details/${ name }` }><h3>{ name }</h3></Link>
				<button
					className="product-tile__buy"
					onClick={ addToCart }
				>
					${ price }
				</button>
			</section>
			<section className="product-tile__logo-wrapper">
				<img
					className="product-tile__logo"
					alt={ `${ name } logo` }
					src={ logo }
				/>
			</section>
		</div>
	);
}

ProductTile.propTypes = {
	  addToCart: PropTypes.func.isRequired
	, logo: PropTypes.string.isRequired
	, name: PropTypes.string.isRequired
	, price: PropTypes.number.isRequired
};
```

</details>

</details>

## Contributions

### Contributions

#### 
 
If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

### Copyright

#### 

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">